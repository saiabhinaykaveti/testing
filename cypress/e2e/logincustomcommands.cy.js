/// <reference types='cypress'/>
describe('login data with custom commands',function(){
   beforeEach(()=>{
        cy.loginwithauth('11213174','60-dayfreetrial')
    })
    it('login with custom commands',function(){
        cy.login('abhinaykavetikrishna@gmail.com','Saisunny@9')
        
    })
    it('logout the application with custom commands',function(){
        cy.login('abhinaykavetikrishna@gmail.com','Saisunny@9')
        cy.logout()
    })

    it.only('login into the application then logout',function(){
        cy.clicklink('Log in')
        cy.login('abhinaykavetikrishna@gmail.com','Saisunny@9')
        cy.get('h2').should('have.text','Welcome to our store')
        cy.clicklink('Wishlist')
        cy.get('.page-body').find('.no-data').as('nodataselector')
        cy.get('@nodataselector').should('have.text','The wishlist is empty!')
        cy.clicklink('Log out')
    })
})
