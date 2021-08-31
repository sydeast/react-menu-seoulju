/// <reference types="Cypress" />
// react-connection.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('access rails server', () => {
  it('Navigating to the rails base url', () => {
    cy.visit('http://localhost:3001/');
  });
});

describe('Access App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Navigating to the local host URL directly', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Navigating to the admin page', () => {
    cy.contains('Admin').click();
    cy.url().should('include', '/login');
  });

  it('Navigating to the checkout page', () => {
    cy.contains('items').click();
    cy.url().should('include', '/checkout');
  });
});
