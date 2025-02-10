/// <reference types="cypress" />
describe('submit a form',{viewportWidth:1536, viewportHeight:960},function(){
    it('checking the login form',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-form')
        .find('.form-control').type('saiabhinay').should('have.value','saiabhinay')
        cy.get('.action-form').submit()
        cy.get('.action-form').next().should('have.text','Your form has been submitted!')
    })

    it('select a option from the drop down',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.form-control.action-select').should('have.value','--Select a fruit--')
        cy.get('.form-control.action-select').select('apples')
        .should('have.value','fr-apples')
    })

    it('select multiple checkboxes',{ viewportWidth:768, viewportHeight:1024},function(){
        /*

        we can write the view port in two different ways
        one is we can mention inside it block like cy.viewport(768,1024) or cy.viewport('ipad-mini','potrait')
      it('',{ viewportweight:768, viewportheight:1024},function(){
      })
       it('it block',function(){
       cy.viewport(768,1024
       )})
        */
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-select-multiple')
        .select(['apples','oranges','bananas'])
        .invoke('val')
        .should('deep.equal',['fr-apples','fr-oranges','fr-bananas'])
    })

    it('scroll into view',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#scroll-horizontal .btn-danger').should('not.be.visible')
        cy.get('#scroll-horizontal .btn-danger').scrollIntoView()
        cy.get('#scroll-horizontal .btn-danger').should('be.visible')
    })

    it('vertical view',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#scroll-vertical button')
        .should('not.be.visible')
        cy.get('#scroll-vertical button')
        .scrollIntoView()
        cy.get('#scroll-vertical button')
        .should('be.visible')
    })

    it('to scroll a window or scrollable element to a specific position  use scrollto()',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.scrollTo('bottom')
        cy.get('#scrollable-horizontal').scrollTo('right')
    })

    it('invoke a value',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.trigger-input-range')
        .invoke('val', 25)
        cy.get('.trigger-input-range')
        .trigger('change')
    })
})

