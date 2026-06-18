# Cypress E2E Framework

E2E test automation project for the Telnyx web application using Cypress.\
The project demonstrates UI testing, CI integration, and multi-environment execution (desktop + mobile).

---

## Structure

  ```
  cypress/
    e2e/
      desktop/   → desktop tests
      mobile/    → mobile tests
    pages/       → page objects
  ```
  
---

## Configurations

Two Cypress configs are used:

Desktop (cypress.config.ts)
- Viewport: 1920x1080
- Tests: cypress/e2e/desktop/**/*.cy.ts

Mobile (cypress.mobile.config.ts)

- Viewport: 375x812
- Tests: cypress/e2e/mobile/**/*.cy.ts

---

## Run Tests
Desktop
```
npx cypress run --config-file cypress.config.ts --record --tag desktop
```
Mobile
```
npx cypress run --config-file cypress.mobile.config.ts --record --tag mobile
```

---

## CI / Cypress Cloud
* GitHub Actions runs desktop and mobile tests separately
* Results are recorded in Cypress Cloud
* Test results, logs, and replays are available in the Cloud dashboard
* Screenshots are generated automatically on failure

---

## Author

Automation project created by Konstantin Kovalenko.

* GitHub: https://github.com/KonstantinKovalenko  
* LinkedIn: [www.linkedin.com/in/kostyantyn-kovalenko/](https://www.linkedin.com/in/kostyantyn-kovalenko/)
* Email: chvyaka.kk@gmail.com
* Telegram: @kovakost