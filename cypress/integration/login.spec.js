/// <reference types="cypress" />

describe('Login Page', () => {
  it('Successful login redirects to user home', () => {
    cy.url().should('include', '/userHome');
  });

  it('Login error displays when unsuccessful', () => {
    cy.get('').should('have.text', '');
  });
});
