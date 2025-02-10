/// <reference types='cypress'/>
describe('login using fixtures using alias',function(){
    beforeEach(()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
        cy.fixture('example').as('data')

        
    })
    it('login with valid credentilas',function(){
        
        cy.get('.ico-login').click()
        cy.get('#Email').clear().type(this.data.email)
        cy.get('#Password').clear().type(this.data.password)
        cy.get('button[class="button-1 login-button"]').click()

    })

    it('login with invalid credentials',function(){
        cy.get('.ico-login').click()
        cy.get('#Email').clear().type(this.data.email1)
        cy.get('#Password').clear().type(this.data.password1)
        cy.get('button[class="button-1 login-button"]').click()
    })
})