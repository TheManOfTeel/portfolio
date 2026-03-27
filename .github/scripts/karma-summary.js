const fs = require('fs');
const path = require('path');

const xmlPath = path.resolve('test-results/test-results.xml');

if (!fs.existsSync(xmlPath)) {
  console.log('## ⚠️ Test Results\n\nNo test result XML found.');
  process.exit(0);
}

const xml = fs.readFileSync(xmlPath, 'utf8');

// Parse testsuite attributes (works for both JUnit and Karma XML schemas)
const suiteMatch = xml.match(/<testsuite[^>]+>/);
if (!suiteMatch) {
  console.log('## ⚠️ Test Results\n\nCould not parse test results XML.');
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
const icon     = failures + errors > 0 ? '❌' : '✅';
const status   = failures + errors > 0 ? 'Failing' : 'Passing';

// Parse individual failure details
const failureBlocks = [...xml.matchAll(/<testcase[^>]+name="([^"]+)"[^>]*>[\s\S]*?<failure[^>]*>([\s\S]*?)<\/failure>[\s\S]*?<\/testcase>/g)];

let summary = `## Karma Results\n\n`;
summary += `| Result | Passed ✅ | Failed ❌ | Errors 💥 | Skipped ↩️ | Duration 🕗 |\n`;
summary += `|---|---|---|---|---|---|\n`;
summary += `| ${status} ${icon} | ${passed} | ${failures} | ${errors} | ${skipped} | ${time}s |\n\n`;

if (failureBlocks.length > 0) {
  summary += `### Failed Tests\n\n`;
  for (const [, name, message] of failureBlocks) {
    const clean = message.replace(/<!\[CDATA\[|\]\]>/g, '').trim().slice(0, 500);
    summary += `<details><summary><code>${name}</code></summary>\n\n\`\`\`\n${clean}\n\`\`\`\n\n</details>\n\n`;
  }
}

process.stdout.write(summary);
