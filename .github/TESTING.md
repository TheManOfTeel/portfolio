# Jest Test Reporting for GitHub Actions

This document explains how Jest unit tests are configured to display results in GitHub Actions.

## Overview

The portfolio project uses the following test reporting pipeline:

```
npm test (runs Jest)
    ↓
jest-junit reporter generates test-results/test-results.xml
    ↓
jest-summary.js parses XML and formats for GitHub Actions
    ↓
Results displayed in:
  - Job Summary page
  - Downloadable artifacts
```

## Configuration Files

### 1. jest.config.js
Configures Jest with Angular-specific settings:
- **Preset**: `jest-preset-angular` - Provides Angular-specific configuration
- **Test Environment**: `jsdom` - Browser-like DOM environment
- **Reporters**: 
  - `default` - Console output
  - `jest-junit` - JUnit XML format for CI/CD
- **Coverage Settings**:
  - `collectCoverage: true` - Always collect coverage metrics
  - `collectCoverageFrom` - Specifies which files to include in coverage
  - `coverageDirectory: coverage/portfolio` - Output location
- **Setup File**: `setup-jest.ts` - Test environment initialization

### 2. setup-jest.ts
Initializes the Jest test environment:
- Imports `zone.js` for Angular compatibility
- Initializes TestBed with BrowserDynamicTestingModule
- Configures Angular's test environment for JSDOM

### 3. .github/workflows/jest-tests.yml
GitHub Actions workflow that:
1. Installs dependencies
2. Runs `npm run test:ci` (headless mode with coverage)
3. Generates GitHub Actions summary via `jest-summary.js`
4. Publishes results with `publish-unit-test-result-action`
5. Uploads artifacts for download

### 4. .github/scripts/jest-summary.js
Script that:
- Parses the JUnit XML file from jest-junit reporter
- Extracts test metrics (passed, failed, duration, coverage, etc.)
- Formats results as Markdown for GitHub Actions summary
- Includes code coverage metrics table
- Highlights failures with collapsible details
- Displays overall pass rate percentage

## Generated Outputs

### GitHub Actions Workflow Summary
When tests run in GitHub Actions, the summary includes:
- Overall status (✅ Passing / ❌ Failing)
- Test metrics table (tests passed, failed, skipped)
- Code coverage metrics table (statements, branches, functions, lines)
- Pass rate percentage
- Overall coverage percentage
- Failed test details with error messages
- Collapsible test failure details

### Artifacts
Two artifacts are automatically uploaded and stored for 14 days:
1. **jest-test-results** - JUnit XML test results
2. **jest-coverage-reports** - Code coverage HTML reports from coverage/portfolio directory

## Local Development

### Preview Summary Format
```bash
npm run jest:preview
```
Shows what the GitHub Actions summary will look like with current test results and code coverage metrics.

### Run Tests
```bash
npm test              # Runs in watch mode (re-runs on file changes)
npm run test:ci       # Runs once with coverage collection (for CI)
```

### Run Specific Test Files
```bash
npm test -- --testPathPattern="component"  # Run tests matching pattern
npm test -- src/app/components/toolbar/    # Run tests in specific directory
```

## Integration with CI

The Jest tests are integrated with the main CI pipeline:

1. **Triggered by**: Pull requests to `main` branch
2. **Workflow**: `.github/workflows/jest-tests.yml` runs on PR creation/updates
3. **Status Check**: GitHub shows test result status on PR
4. **Results Summary**: Test results and coverage metrics posted to workflow summary
5. **Coverage Tracking**: Code coverage metrics are captured and displayed for trend analysis

## Test Result Details

When Jest tests run, the following is captured:

- **Total Test Suites**: Number of spec files executed
- **Total Tests**: All test cases executed
- **Passed**: Successfully completed tests
- **Failed**: Tests that failed assertions
- **Skipped**: Tests marked with `test.skip()` or `describe.skip()`
- **Duration**: Total execution time in seconds
- **Pass Rate**: Percentage of tests that passed

### Code Coverage Metrics

- **Statements**: Percentage of code statements executed
- **Branches**: Percentage of conditional branches covered
- **Functions**: Percentage of functions executed
- **Lines**: Percentage of lines of code executed

Target: 100% coverage across all metrics for production code (test files excluded).

## Troubleshooting

### No Test Results XML Generated
- Ensure `jest-junit` is installed: `npm install`
- Check that `jest-junit` is in the `reporters` array in `jest.config.js`
- Verify `outputDirectory` points to correct location in jest.config.js
- Run `npm run test:ci` locally to verify XML generation

### Tests Pass Locally But Fail in CI
- Ensure `npm install` is running in GitHub Actions workflow
- Check that Node.js version matches local development environment
- Verify all environment variables are set if needed

### Summary Not Appearing in GitHub Actions
- Verify `.github/scripts/jest-summary.js` exists
- Check workflow step `Generate Jest summary for GitHub Actions` is running
- Ensure `test-results/test-results.xml` was created by jest-junit
- Verify JSON parsing in jest-summary.js if XML format changed

### Coverage Metrics Missing from Summary
- Ensure `collectCoverage: true` is set in `jest.config.js`
- Check `collectCoverageFrom` array includes source files
- Verify `coverage/portfolio/coverage-summary.json` is generated
- Run `npm run test:ci` locally to check coverage output

## Best Practices

1. **Keep Tests Fast**: Aim for tests to complete in under 10 seconds
2. **Clear Test Names**: Use descriptive names for easy identification in reports
3. **Maintain Coverage**: Aim for 100% code coverage on all production code
4. **Use Test Isolation**: Each test should be independent and not rely on test execution order
5. **Mock External Dependencies**: Use `jest.mock()` for external APIs and services
6. **Check Artifacts**: Download coverage reports to verify code coverage trends
7. **Review Coverage Gaps**: Use coverage reports to identify untested code paths
8. **Run Locally First**: Always run `npm test` locally before pushing to catch issues early

## Dependencies

Required npm packages:
- `jest@^30.0.0` - Test framework
- `jest-preset-angular@^16.0.0` - Angular preset for Jest
- `jest-environment-jsdom@^30.0.0` - Browser-like test environment
- `ts-jest@^29.0.0` - TypeScript support for Jest
- `@types/jest@^29.0.0` - TypeScript types for Jest
- `jest-junit@^16.0.0` - JUnit XML reporter
- `start-server-and-test@latest` - Server lifecycle management for e2e tests
- `@angular/build` - Angular build tools

## References

- [Jest Documentation](https://jestjs.io/)
- [jest-preset-angular](https://github.com/thymikee/jest-preset-angular)
- [jest-junit Reporter](https://github.com/jest-community/jest-junit)
- [GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
