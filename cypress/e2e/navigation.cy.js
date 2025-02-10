/// <reference types='cypress'/>
describe('open different appliation',function(){
    it('open the flipkart ',function(){
        cy.visit('https://example.cypress.io')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu').find('[href="/commands/navigation"]').click()
        cy.log('currently i am in navigation page')
        cy.go(-1)
        cy.log('currently i am in home page')
        cy.go(1)
        cy.log('currently i am in navigation page')
        cy.go('back')
        cy.go('forward')
        cy.reload()
    
    })
})