describe('Search Recipe Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/searchRecipes');
  });
  it('View Recipe button takes you to recipe info page', () => {
    cy.intercept({ method: 'GET', url: '*recipes/findByIngredients*' }, [
      { title: 'Parmesan', id: 1 },
    ]);

    cy.get('[data-testid="View RecipeLinkButton"]').click();

    cy.url().should('include', '/recipe');
  });
});
