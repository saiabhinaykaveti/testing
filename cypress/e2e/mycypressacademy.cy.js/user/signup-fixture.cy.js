/// <reference types='cypress' />
describe('signup functionality',function(){
    
    beforeEach(()=>{
        cy.fixture('signup.json').as('sdata')
    })
    it('signup and by using cy.fixure()',function(){

        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        }) 
        

        cy.get('.ico-register').click()
        cy.url().should('eq','http://abhinaykaveti-001-site1.ltempurl.com/register?returnUrl=%2F') 
        cy.get('[for="gender-male"]').should('have.text','Male')
        cy.get('[for="gender-female"]').should('have.text','Female')
        cy.get('#gender-male').click()
        cy.get('#FirstName').clear().type(this.sdata.Firstname)
        cy.get('#LastName').clear().type(this.sdata.Lastname)
        cy.get('#Email').clear().type(this.sdata.Email)
        cy.get('#Company').clear().type(this.sdata.Companyname)
        cy.get('#Password').clear().type(this.sdata.Password)
        cy.get('#ConfirmPassword').clear().type(this.sdata.Confirmpassword)
        cy.get('#register-button').click()
        
    })
    
    

})