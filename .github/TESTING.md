# Karma Test Reporting for GitHub Actions

This document explains how karma unit tests are configured to display results in GitHub Actions.

## Overview

The portfolio project uses the following test reporting pipeline:

```
ng test (runs Karma with Jasmine)
    ↓
karma-junit-reporter generates test-results/test-results.xml
    ↓
karma-summary.js parses XML and formats for GitHub Actions
    ↓
Results displayed in:
  - Job Summary page
  - PR comments (auto-posted)
  - Downloadable artifacts
```

## Configuration Files

### 1. karma.conf.js
Configures Karma to output JUnit XML format:
- **Reporter**: `junit` (karma-junit-reporter)
- **Output**: `test-results/test-results.xml`
- **Special Configs**:
  - `useBrowserName: false` - prevents browser name in test names
  - `lcovonly` - for code coverage analysis

### 2. .github/workflows/karma-tests.yml
GitHub Actions workflow that:
1. Installs dependencies
2. Sets up Chrome browser
3. Runs `npm run test:ci` (headless mode)
4. Generates GitHub Actions summary via `karma-summary.js`
5. Publishes results with `publish-unit-test-result-action`
6. Uploads artifacts for download

### 3. .github/scripts/karma-summary.js
Script that:
- Parses the JUnit XML file from karma
- Extracts test metrics (passed, failed, duration, etc.)
- Formats results as Markdown for GitHub Actions summary
- Highlights failures with collapsible details
- Displays pass rate percentage

## Generated Outputs

### GitHub Actions Workflow Summary
When tests run in GitHub Actions, the summary includes:
- Overall status (✅ Passing / ❌ Failing)
- Test metrics table
- Pass rate percentage
- Failed test details with error messages
- Collapsible test failure details

### Artifacts
Two artifacts are automatically uploaded and stored for 14 days:
1. **karma-test-results** - JUnit XML test results
2. **karma-coverage-reports** - Code coverage HTML reports

### PR Comments
For pull requests, `publish-unit-test-result-action` automatically comments with:
- Test results summary
- Comparison to previous commits
- Direct links to rerun failed tests

## Local Development

### Validate Setup
```bash
npm run karma:validate
```
This checks that all required files and dependencies are properly configured.

### Preview Summary Format
```bash
npm run karma:preview
```
Shows what the GitHub Actions summary will look like with example output.

### Run Tests
```bash
npm test              # Runs in watch mode with Chrome UI
npm run test:ci       # Runs once in headless mode (for CI)
```

## Integration with CI

The karma tests are integrated with the main CI pipeline:

1. **Triggered by**: Pull requests to `main` branch
2. **Workflow**: `.github/workflows/main-ci-tests.yml` calls `karma-tests.yml`
3. **Status Check**: GitHub shows test result status on PR
4. **Auto-Comment**: Results are posted as PR comments automatically

## Test Result Details

When karma tests run, the following is captured:

- **Total Tests Count**: All test cases executed
- **Passed**: Successfully completed tests
- **Failed**: Tests that failed assertions
- **Errors**: Tests that threw errors
- **Skipped**: Tests marked with `xit()` or `xdescribe()`
- **Duration**: Total execution time in seconds
- **Pass Rate**: Percentage of tests that passed

## Troubleshooting

### No Test Results XML Generated
- Ensure `karma-junit-reporter` is installed: `npm install`
- Check that `junitReporter` is configured in `karma.conf.js`
- Verify tests ran: `npm run test:ci` should not error with `continue-on-error: true`

### Summary Not Appearing in GitHub Actions
- Verify `.github/scripts/karma-summary.js` exists
- Check workflow step `Generate Karma summary for GitHub Actions` is running
- Ensure `test-results/test-results.xml` was created

### Chrome Not Found in CI
- The workflow includes `uses: browser-actions/setup-chrome@v2`
- Sets `CHROME_BIN` environment variable
- If missing, GitHub Actions should fail at the "Install Chrome" step

## Best Practices

1. **Keep Tests Fast**: Aim for tests to complete in under 30 seconds
2. **Clear Test Names**: Use descriptive names for easy identification in reports
3. **Fail Fast**: Use `continue-on-error: true` so summary is always generated
4. **Check Artifacts**: Download coverage reports to verify code coverage
5. **Review Comparisons**: Use the "compare to earlier commit" feature to track trends

## Dependencies

Required npm packages:
- `karma@~6.4.4`
- `jasmine-core@^6.1.0`
- `karma-junit-reporter@^2.0.1`
- `karma-chrome-launcher@~3.2.0`
- `karma-coverage@~2.1.0`
- `@angular/devkit/build-angular` (includes Karma plugin)

## References

- [Karma Test Runner](https://karma-runner.github.io/)
- [JUnit Reporter Plugin](https://github.com/karma-runner/karma-junit-reporter)
- [GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [Test Result Publishing Action](https://github.com/EnricoMi/publish-unit-test-result-action)
