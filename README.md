# Portfolio [![Test and Deploy to GH Pages](https://github.com/TheManOfTeel/portfolio/actions/workflows/angular-ghpages-deploy.yml/badge.svg?branch=main)](https://github.com/TheManOfTeel/portfolio/actions/workflows/angular-ghpages-deploy.yml?query=branch%3Amain)

The GitHub pages hosted site can be found [here](https://themanofteel.github.io/portfolio/).

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0 and has been migrated to use version 21.x.x.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with [Jest](https://jestjs.io), use the following command:

```bash
npm test
```

For CI environments, use:

```bash
npm run test:ci
```

This runs tests with code coverage reporting and JUnit output for CI integration.

## Running end-to-end tests

For end-to-end (e2e) testing, this project uses [Cypress](https://cypress.io). Run the following commands:

### All E2E Tests
```bash
npm run cypress:run:e2e
```

### Component Tests
```bash
npm run cypress:run:component
```

### Specific Test Suites

#### Accessibility Tests
```bash
npm run cypress:run:accessibility
```
Tests WCAG compliance, keyboard navigation, screen reader support, and color contrast.

#### Performance Tests
```bash
npm run cypress:run:performance
```
Tests page load times, Core Web Vitals, bundle size, and runtime performance.

#### Mobile Responsiveness Tests
```bash
npm run cypress:run:mobile
```
Tests mobile layouts, touch interactions, and responsive design across different viewports.

#### Visual Regression Tests
```bash
npm run cypress:run:visual
```
Captures and compares visual snapshots to detect UI changes (requires cypress-image-snapshot plugin).

### Interactive Test Development
```bash
npm run cypress:open
```

## Test Coverage

The project includes comprehensive test coverage for:

### Unit Tests (Jest)
- Component logic and templates
- Service methods and state management
- Model classes and data structures
- Code coverage reporting

### E2E Tests (Cypress)
- User workflows and navigation
- UI interactions and state changes
- Responsive design and mobile support
- Accessibility compliance
- Performance monitoring
- Visual regression detection

### Component Tests (Cypress)
- Individual component mounting and rendering
- Template binding and change detection
- User interaction simulation
- Dark mode theming
- Mobile-specific layouts

## CI/CD Integration

Tests are automatically run in GitHub Actions with:
- Unit test execution and coverage reporting
- E2E test execution across multiple browsers
- Accessibility and performance validation
- Test result artifacts and summaries

## Test Structure

```
cypress/
├── e2e/
│   ├── spec.cy.ts          # Main E2E test suite
│   ├── footer.cy.ts        # Footer component tests
│   ├── mobile.cy.ts        # Mobile responsiveness tests
│   ├── accessibility.cy.ts # Accessibility compliance tests
│   ├── performance.cy.ts   # Performance monitoring tests
│   └── visual-regression.cy.ts # Visual snapshot tests
├── about.cy.ts             # About component tests
├── projects.cy.ts          # Projects component tests
└── toolbar.cy.ts           # Toolbar component tests
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
