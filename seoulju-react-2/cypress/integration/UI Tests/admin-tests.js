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

  // Commenting out the working delete test until I implement fetch tests as it is too destructive.
  // it('Verify remove from menu', () => {
  //   cy.get('.custom-select').select('Korean Fried Chicken');
  //   cy.get('.removeBtn:last').click().should('not.exist');
  // })
});