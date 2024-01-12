/// <reference types="Cypress" />

// Import the EventEmitter module
const EventEmitter = require('events');

describe('Test Suite', () => {
  // Increase the maximum number of listeners for the "runner:resume" event
  beforeEach(() => {
    EventEmitter.defaultMaxListeners = 20; // Set to a value higher than the current number of listeners
  });

  it('Test Case1', () => {
    // navigate to indian web site
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
    console.log('sf')
    // Add to cart item by its name
    cy.get('@productLocator').find('.product').each(($el) => {
      const textName = $el.find('h4.product-name').text();
      if (textName.includes('Cashews')) {
        $el.find('button').click();
      }
    });

    // Take the logo title
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});
