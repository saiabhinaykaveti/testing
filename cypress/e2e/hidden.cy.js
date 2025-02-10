/// <reference types="cypress"/>
describe('hidden element',function(){
    it('test it',function(){
        cy.visit('https://example.cypress.io/commands/actions')
       cy.get('.action-opacity>.btn').click({force:true})

    })

    it.only('db click()',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-div').dblclick()
        cy.get('.action-div').should('not.be.visible')
        cy.get('.action-div-hidden').should('be.visible')
    })

    it('right click on the page',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.rightclick-action-div').rightclick()
        cy.get('.rightclick-action-div').should('not.be.visible')
    })
})