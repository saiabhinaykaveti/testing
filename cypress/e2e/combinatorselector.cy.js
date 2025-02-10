///<reference types="cypress"/>
describe('combinator selector',function(){
    it.only('child selector',function(){
        
        cy.visit('https://example.cypress.io/')
        cy.get('.dropdown-toggle').click()
        //child selector is used to select the direct children of an element
        cy.get('.dropdown-menu').find('li').eq(0).click()
    })

    xit('descendent selector',function(){
        
        cy.visit('http://127.0.0.1:8080/cypress/e2e/html/combinator.html')
        cy.get('div>p').should('have.length','5')
        
    })
})