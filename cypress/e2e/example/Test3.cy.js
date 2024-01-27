/// <reference types="Cypress" />

// Import the EventEmitter module
const { should } = require('chai')
const EventEmitter = require('events')

describe('Test Suite', () => {
  // Increase the maximum number of listeners for the "runner:resume" event
  beforeEach(() => {
    EventEmitter.defaultMaxListeners = 20 // Set to a value higher than the current number of listeners
  })

  it('Test Case3', () => {
    // navigate to indian web site
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('fieldset:contains("Checkbox Example")').find('input[type="checkbox"]').check(['option2','option3']).should('be.checked')

    cy.get('select').select('option2').should('have.value','option2')
  })
})
