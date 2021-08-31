/// <reference types="Cypress" />
describe('Seoulju App', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/');
  });
  it('find menu items on homepage', () => {
    cy.contains('Bulgogi Kimchi Fries');
  });
  it('add one item to order', () => {
    cy.get('button:first').click();
    cy.get('#counter').should('not.have.value', 0);
  });

  it('add multiple items to order', () => {
    cy.get('button:first').click();
    cy.get('button:last').click();
    cy.get('#counter').should('not.have.value', 1);
  });
});
