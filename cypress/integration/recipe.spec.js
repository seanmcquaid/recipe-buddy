describe('Recipe Page', () => {
  beforeEach(() => {
    cy.intercept(
      { method: 'GET', url: '*recipes/716429/information' },
      { fixture: 'recipe.json' },
    );

    cy.visit('http://localhost:3000/recipe/716429');
  });

  it('Adding recipe takes you back to recipe search page', () => {
    cy.intercept({ method: 'POST', url: '*recipes*' }, [
      {
        id: 716429,
        title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
      },
    ]);

    cy.get('[data-testid="Add RecipeButton"]').click();

    cy.url().should('include', '/searchRecipes');
  });
});
