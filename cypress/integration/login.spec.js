/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Successful login redirects to user home', () => {
    cy.get('[data-testid=usernameTextInput]').type('sean');
    cy.get('[data-testid=passwordTextInput]').type('password');

    cy.intercept(
      { method: 'POST', url: '*users/login' },
      { fixture: 'login.json' },
    );

    cy.get('[data-testid=SubmitButton]').click();

    cy.url().should('include', '/userHome');
  });

  it('Login error displays when unsuccessful', () => {
    cy.get('[data-testid=usernameTextInput]').type('sean');
    cy.get('[data-testid=passwordTextInput]').type('password');

    cy.intercept(
      { method: 'POST', url: '*users/login' },
      { fixture: 'loginError.json', statusCode: 401 },
    );

    cy.get('[data-testid=SubmitButton]').click();

    cy.get('[data-testid=errorMessage]').should(
      'have.text',
      "This user doesn't exist, please try again!",
    );
  });
});
