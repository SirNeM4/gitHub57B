### I made a change, I started using POM on this project, that is why the exercise in the pdf provided is different from this one

### How it works
This project uses POM (Page Object Model) as a QA design pattern, and this will be the folder structure
- `cypress`: main folder
- `cypress/e2e`: will contain all tests
- `cypress/page_objects`: will contain all Page Objects
- `cypress/screenshots`: will contain error images when a test fails
- baseUrl and other settings are set to `cypress.config.js`

### Install
- Open a terminal and go to the folder
- Execute `npm install`
 
### Execute tests
- Open a terminal and go to the folder
- Headless mode: execute `npm cypress run`
> The execution will throw an error because GH04 test is failing
-  No headless mode: execute `npm cypress open`
- then click on E2E testing,
- then click con Chrome >> Start E2E Testing button
- then click on loginGitHub.cy.js
> The execution will shown an error GH04 test is failing
- Error images will be saved in the `cypress/screenshots/` path
