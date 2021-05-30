describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('Successful register redirects to user home', () => {
    cy.get('[data-testid=usernameTextInput]').type('sean');
    cy.get('[data-testid=passwordTextInput]').type('password');
    cy.get('[data-testid=confirmPasswordTextInput]').type('password');

    cy.intercept(
      { method: 'POST', url: '*users/register' },
      { fixture: 'register.json' },
    );

    cy.get('[data-testid=SubmitButton]').click();

    cy.url().should('include', '/userHome');
  });

  it("Error message displays when passwords don't match", () => {
    cy.get('[data-testid=usernameTextInput]').type('sean');
    cy.get('[data-testid=passwordTextInput]').type('password');
    cy.get('[data-testid=confirmPasswordTextInput]').type('password2');

    cy.get('[data-testid=SubmitButton]').should('be.disabled');
  });

  it("Submit button is displayed when passwords don't match", () => {
    cy.get('[data-testid=usernameTextInput]').type('sean');
    cy.get('[data-testid=passwordTextInput]').type('password');
    cy.get('[data-testid=confirmPasswordTextInput]').type('password2');

    cy.get('[data-testid=passwordErrorMessage]').should(
      'have.text',
      'Make sure your password and confirm password match!',
    );
  });

  it('Register error displays when unsuccessful', () => {
    cy.get('[data-testid=usernameTextInput]').type('sean');
    cy.get('[data-testid=passwordTextInput]').type('password');
    cy.get('[data-testid=confirmPasswordTextInput]').type('password');

    cy.intercept(
      { method: 'POST', url: '*users/register' },
      { fixture: 'registerError.json', statusCode: 401 },
    );

    cy.get('[data-testid=SubmitButton]').click();

    cy.get('[data-testid=errorMessage]').should(
      'have.text',
      'This user already exists, please try again!',
    );
  });
});
