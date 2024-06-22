import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import logon from '../../support/pages/logon';

Given("I'm on the login page", () => {
logon.acessarLogin();
});

When("I enter my registered email and password", () => {
  logon.preencherLogin();
});

And("I click the login button", () => {
  logon.confirmarLogin();
});

Then("I should be logged into my account successfully", () => {
  cy.url().should('include', '/admin'); // Verifica se a URL mudou para /admin, indicando que o login foi bem-sucedido
  cy.get('.content-header').contains('Dashboard').should('be.visible'); // Verifica se o elemento com classe content-header contém o texto "Dashboard" e está visível
});
