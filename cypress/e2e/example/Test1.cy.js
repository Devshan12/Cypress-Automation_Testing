/// <reference types="Cypress" />

describe('Test Suite', () => {
  it('Test Case1', () => {
      // navigate to indian web site
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
    //  cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    // Add to cart item by it's include name
    cy.get('.products').find('.product').each(($el, index, $list) => {

      const textName = $el.find('h4.product-name').text()
      if(textName.includes('Cashews')){

      $el.find('button').click()
      }
    })
  })
})