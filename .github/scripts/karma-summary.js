const fs = require('fs');
const path = require('path');

const xmlPath = path.resolve('test-results/test-results.xml');

if (!fs.existsSync(xmlPath)) {
  console.log('## ⚠️ Karma Test Results\n\nNo test result XML found. Tests may not have run.');
  process.exit(0);
}

const xml = fs.readFileSync(xmlPath, 'utf8');

// Parse testsuite attributes (works for both JUnit and Karma XML schemas)
const suiteMatch = xml.match(/<testsuite[^>]+>/);
if (!suiteMatch) {
  console.log('## ⚠️ Karma Test Results\n\nCould not parse test results XML.');
  process.exit(0);
}

const attr = (name) => {
  const m = suiteMatch[0].match(new RegExp(`${name}="([^"]+)"`));
  return m ? m[1] : '0';
};

const tests    = parseInt(attr('tests'),    10);
const failures = parseInt(attr('failures'), 10);
const errors   = parseInt(attr('errors'),   10);
const skipped  = parseInt(attr('skipped'),  10);
const time     = parseFloat(attr('time')).toFixed(3);
const passed   = tests - failures - errors - skipped;
const hasFailures = failures + errors > 0;
const icon     = hasFailures ? '❌' : '✅';
const status   = hasFailures ? 'Failing' : 'Passing';

// Parse individual test cases for details
const testcasePattern = /<testcase[^>]+name="([^"]+)"[^>]*>[\s\S]*?(?:<(?:failure|error)[^>]*>([\s\S]*?)<\/(?:failure|error)>)?[\s\S]*?<\/testcase>/g;
const testCases = [...xml.matchAll(testcasePattern)];

// Separate passed and failed tests
const failedTests = testCases.filter(tc => tc[2]); // Has failure content
const passedTests = testCases.filter(tc => !tc[2]); // No failure

let summary = `## Karma Results\n\n`;

// Results table
summary += `### Unit Test Results\n\n`;
summary += `| **Result** | **Passed** ✅ | **Failed** ❌ | **Errors** 💥 | **Skipped** ↩️ | **Duration** 🕗 |\n`;
summary += `|---|---|---|---|---|---|\n`;
summary += `| ${status} ${icon} | ${passed} | ${failures} | ${errors} | ${skipped} | ${time}s |\n\n`;

// Pass rate percentage
if (tests > 0) {
  const passPercent = ((passed / tests) * 100).toFixed(1);
  summary += `**Pass Rate:** ${passPercent}%\n\n`;
}

// Failure details if any
if (failedTests.length > 0) {
  summary += `### ❌ Failed Tests (${failedTests.length})\n\n`;
  for (const [, name, message] of failedTests) {
    const clean = message
      .replace(/<!\[CDATA\[|\]\]>/g, '')
      .replace(/^Error: /, '')
      .trim()
      .slice(0, 400);
    summary += `<details><summary><code>${name}</code></summary>\n\n\`\`\`\n${clean}\n\`\`\`\n\n</details>\n\n`;
  }
}

// Passed tests dropdown if all passed
if (passed > 0 && passed <= 20) {
  summary += `### ✅ Test Summary\n\n`;
  for (const [, name] of passedTests.slice(0, 20)) {
    summary += `- ✅ \`${name}\`\n`;
  }
  if (passedTests.length > 20) {
    summary += `\n... and ${passedTests.length - 20} more passed tests\n`;
  }
}

// Code Coverage Section
try {
  const coverageJsonPath = path.resolve('coverage/portfolio/coverage-summary.json');
  if (fs.existsSync(coverageJsonPath)) {
    const coverageData = JSON.parse(fs.readFileSync(coverageJsonPath, 'utf8'));
    const total = coverageData.total;

    if (total) {
      summary += `\n### Code Coverage Results\n\n`;
      summary += `| **Metric** | **Coverage** |\n`;
      summary += `|---|---|\n`;
      summary += `| Statements | ${total.statements.pct}% |\n`;
      summary += `| Branches | ${total.branches.pct}% |\n`;
      summary += `| Functions | ${total.functions.pct}% |\n`;
      summary += `| Lines | ${total.lines.pct}% |\n\n`;

      // Visual indicator for coverage
      const avgCoverage = (total.statements.pct + total.branches.pct + total.functions.pct + total.lines.pct) / 4;
      if (avgCoverage >= 80) {
        summary += `✅ **Overall Coverage:** ${avgCoverage.toFixed(1)}% (Excellent)\n`;
      } else if (avgCoverage >= 70) {
        summary += `🟡 **Overall Coverage:** ${avgCoverage.toFixed(1)}% (Good)\n`;
      } else if (avgCoverage >= 50) {
        summary += `🟠 **Overall Coverage:** ${avgCoverage.toFixed(1)}% (Fair)\n`;
      } else {
        summary += `🔴 **Overall Coverage:** ${avgCoverage.toFixed(1)}% (Needs Improvement)\n`;
      }
    }
  }
} catch (err) {
  // Coverage file doesn't exist yet, which is fine
}

process.stdout.write(summary);
