#!/usr/bin/env node

/**
 * Validates that Karma is properly configured for GitHub Actions reporting
 * Run this script to verify the test setup is correct
 */

const fs = require('fs');
const path = require('path');

const checks = [];
let passCount = 0;
let failCount = 0;

// Check 1: karma-junit-reporter is installed
const packageJson = require(path.resolve('package.json'));
const hasJunitReporter = packageJson.devDependencies['karma-junit-reporter'];
if (hasJunitReporter) {
  checks.push('✅ karma-junit-reporter is installed');
  passCount++;
} else {
  checks.push('❌ karma-junit-reporter is NOT installed');
  failCount++;
}

// Check 2: karma.conf.js exists and has junit reporter
const karmaConfPath = path.resolve('karma.conf.js');
if (fs.existsSync(karmaConfPath)) {
  const karmaConf = fs.readFileSync(karmaConfPath, 'utf8');
  if (karmaConf.includes("'junit'") && karmaConf.includes('junitReporter')) {
    checks.push('✅ karma.conf.js has junit reporter configured');
    passCount++;
  } else {
    checks.push('❌ karma.conf.js missing junit reporter configuration');
    failCount++;
  }
} else {
  checks.push('❌ karma.conf.js not found');
  failCount++;
}

// Check 3: karma-summary.js exists
const karmaSummaryPath = path.resolve('.github/scripts/karma-summary.js');
if (fs.existsSync(karmaSummaryPath)) {
  checks.push('✅ .github/scripts/karma-summary.js exists');
  passCount++;
} else {
  checks.push('❌ .github/scripts/karma-summary.js not found');
  failCount++;
}

// Check 4: karma-tests.yml exists
const workflowPath = path.resolve('.github/workflows/karma-tests.yml');
if (fs.existsSync(workflowPath)) {
  const workflow = fs.readFileSync(workflowPath, 'utf8');
  if (workflow.includes('karma-summary.js')) {
    checks.push('✅ karma-tests.yml references karma-summary.js');
    passCount++;
  } else {
    checks.push('❌ karma-tests.yml does not reference karma-summary.js');
    failCount++;
  }
} else {
  checks.push('❌ karma-tests.yml not found');
  failCount++;
}

// Check 5: Coverage directory structure
const coverageDir = path.resolve('coverage');
if (!fs.existsSync(coverageDir)) {
  checks.push('⚠️ coverage directory does not exist (will be created on first test run)');
} else {
  checks.push('✅ coverage directory exists');
  passCount++;
}

// Check 6: test-results directory structure
const resultsDir = path.resolve('test-results');
if (!fs.existsSync(resultsDir)) {
  checks.push('⚠️ test-results directory does not exist (will be created on first test run)');
} else {
  checks.push('✅ test-results directory exists');
  passCount++;
}

// Output results
console.log('\n🔍 Karma GitHub Actions Setup Validation\n');
console.log('='.repeat(50));

checks.forEach(check => console.log(check));

console.log('\n' + '='.repeat(50));
console.log(`\n📊 Results: ${passCount} passed, ${failCount} failed\n`);

if (failCount === 0) {
  console.log('✅ Karma is properly configured for GitHub Actions reporting!\n');
  process.exit(0);
} else {
  console.log('❌ Please fix the issues above before running tests in GitHub Actions.\n');
  process.exit(1);
}
