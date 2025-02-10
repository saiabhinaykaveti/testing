/*
1. Browse the URL "https://example.cypress.io"
2. click on commands dropdown and select Actions 
3. in the actions page verify page heading and introduction paragraph 
4. Check do we have Email address text is available and it holding email textbox with type facility to enter ramprasad@ramanasoft.com 
5. verify email  textbox should contain ramprasad@ramanasoft.com 
*/

/// <reference types="cypress"/>
describe('type action commands',function(){

    beforeEach(()=>{
        cy.visit('https://example.cypress.io')
        cy.get('[data-toggle="dropdown"]').click()
        cy.get('.dropdown-menu').find('[href="/commands/actions"]').click()
    })
    it('type email text into the email text box',function(){
       
        cy.get('[data-toggle="dropdown"]').click()
        cy.get('.dropdown-menu').find('li').eq(2).click()
        cy.get('p').first().should('include.text','Examples of actions being performed on DOM elements in Cypress, for a full reference of commands, go to docs.cypress.io')
        cy.get('.form-group').find('label').first().should('have.text','Email address')
        cy.get('#email1').type('saiabhinay')
        .should('have.value','saiabhinay')

        cy.contains('Disabled Textarea')
        cy.get('.form-control.action-disabled').should('not.be.enabled')    
    })

     it('focus on the elemnet',function(){
        cy.get('.form-control.action-focus').focus()
        cy.get('.form-control.action-focus').should('have.class','focus')
        .prev()
        .should('have.attr','style','color: orange;')
     })

})
