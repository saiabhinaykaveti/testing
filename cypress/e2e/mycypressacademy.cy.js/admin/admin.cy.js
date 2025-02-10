/// <reference types="cypress"/>
describe('login in the admin module',function(){
  
    beforeEach(()=>{
        cy.readFile('rootfile.json').as('ardata')
    })
    it('admin login with root file',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/login?ReturnUrl=%2Fadmin',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        }) 
        cy.get('#Email').clear().type(this.ardata.Email)
        cy.get('#Password').clear().type(this.ardata.Password)
        cy.get('#RememberMe').click()
        cy.get('[type="submit"]').eq(1).click()
        cy.url().should('eq','http://abhinaykaveti-001-site1.ltempurl.com/admin')
        cy.get('h1').should('have.text','Dashboard')
    })

})