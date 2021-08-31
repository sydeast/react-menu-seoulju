/// <reference types="Cypress" />
describe('Setting up native Admin Page navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.contains('Admin').click();
    cy.url().should('include', '/login');
  });

  it('Display a menu set from dropdown', () =>{
      cy.get('.custom-select').select('Soups');
      cy.get('#editingItems').should('be.visible');
  })
});