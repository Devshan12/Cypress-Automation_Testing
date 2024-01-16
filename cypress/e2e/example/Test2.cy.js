/// <reference types="Cypress" />

// Import the EventEmitter module
const EventEmitter = require('events')

describe('Test Suite', () => {
  // Increase the maximum number of listeners for the "runner:resume" event
  beforeEach(() => {
    EventEmitter.defaultMaxListeners = 20 // Set to a value higher than the current number of listeners
  })

  it('Test Case2', () => {
    // navigate to indian web site
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    cy.get('.products').as('productLocator')
    // Add to cart item by its name
    cy.get('@productLocator').find('.product').each(($el) => {
      const textName = $el.find('h4.product-name').text()
      if (textName.includes('Cashews')) {
        $el.find('button').click()
      }
    })
    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

  })
})
