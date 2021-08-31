/// <reference types="Cypress" />
describe('Setting Test Order Items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('button:first').click();
    cy.get(':nth-child(2) > .menu-item > .card > .card-body > .btn').click();
    cy.get(':nth-child(18) > .menu-item > .card > .card-body > .btn').click();
    cy.get('button:last').click();
    cy.get('#counter').click();
  });

  it('Verify nagivation to checkout with items', () => {
    cy.get('.orderedItem').should(($orderedItem) => {
      expect($orderedItem).to.have.length(4);
    });
  });

  it('Verify increase an item quantity (6)', () => {
    cy.get('#qty:first').clear().type('3');
    cy.get('.orderedItem').should(($orderedItem) => {
      expect($orderedItem).to.have.length(4);
    });
    cy.get('.itemTotal').invoke('text').should('eq', '6 items');
  });

  it('Verify removing first item from order', () => {
    cy.get('#removeFromOrderBtn:first').click();
    cy.get('.orderedItem').should(($orderedItem) => {
      expect($orderedItem).to.have.length(3);
    });
    cy.get('.itemTotal').invoke('text').should('eq', '3 items');
  });
});
