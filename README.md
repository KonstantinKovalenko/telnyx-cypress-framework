# Cypress E2E Automation Framework

Automated end-to-end testing framework for the Telnyx web application using Cypress.\
The project demonstrates real-world QA practices including CI/CD integration, Cypress Cloud reporting, and multi-environment testing (desktop + mobile).

---

## Structure

  ```
cypress/
    e2e/
        desktop/              # Desktop test suite
        mobile/               # Mobile test suite
    pages/                    # Page Object Models
    support/                  # Custom commands & setup

cypress.config.ts           # Desktop configuration
cypress.mobile.config.ts    # Mobile configuration
  ```
  
---

## Configurations

Two Cypress configs are used:

### Desktop
- Viewport: 1920x1080
- Tests: cypress/e2e/desktop/**/*.cy.ts

### Mobile

- Viewport: 375x812
- Tests: cypress/e2e/mobile/**/*.cy.ts

---

## Run Tests
### Desktop execution
```
npx cypress run --config-file cypress.config.ts --record --tag desktop
```
### Mobile execution
```
npx cypress run --config-file cypress.mobile.config.ts --record --tag mobile
```

---
## CI/CD Pipeline (GitHub Actions)

The pipeline automatically:
- Installs dependencies
- Runs desktop test suite
- Runs mobile test suite
- Records results in Cypress Cloud

Each run is separated by tags:
- desktop
- mobile

---

## Cypress Cloud Integration
The project uses Cypress Cloud for:

- Test execution tracking
- Debugging failed tests
- Video-style test replay
- Centralized reporting dashboard

---

## Key Features
- Page Object Model structure
- Stable selector strategy
- Cross-device testing (desktop + mobile)
- CI execution with GitHub Actions
- Cloud-based test reporting
- Real-world UI validation scenarios

---

## Tech Stack
- Cypress 15+
- TypeScript
- GitHub Actions
- Cypress Cloud
- Node.js

---

## Notes
- Desktop and mobile suites are fully separated to avoid UI conflicts
- Mobile tests use dedicated viewport configuration
- CI ensures consistent execution across environments

---

## Author

Automation project created by Konstantin Kovalenko.

* GitHub: https://github.com/KonstantinKovalenko  
* LinkedIn: [www.linkedin.com/in/kostyantyn-kovalenko/](https://www.linkedin.com/in/kostyantyn-kovalenko/)
* Email: chvyaka.kk@gmail.com
* Telegram: @kovakost