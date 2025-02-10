describe('signup with valid credentials',function(){
    beforeEach(()=>{
        cy.readFile('rootfile.json').then(function(sdata){
            this.srdata=sdata;
        })
    })
        it('singup with cy.readfile()',function(){
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
        cy.get('#FirstName').clear().type(this.srdata.rFirstname)
        cy.get('#LastName').clear().type(this.srdata.rLastname)
        cy.get('#Email').clear().type(this.srdata.rEmail)
        cy.get('#Company').clear().type(this.srdata.rCompanyname)
        cy.get('#Password').clear().type(this.srdata.rPassword)
        cy.get('#ConfirmPassword').clear().type(this.srdata.rConfirmpassword)
        cy.get('#register-button').click()
        })
    
})