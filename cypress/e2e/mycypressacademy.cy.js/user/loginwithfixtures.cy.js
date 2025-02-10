/// <reference types='cypress' />

const { data } = require("ospath")

describe('login with fixtures',function(){

    beforeEach(()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })

        /*cy.fixture('example').then(function(data) {
           this.ldata=data
        })*/

           cy.fixture('example').as('ldata')
    })
    it('login with valid credentails',function(){
        cy.get('.ico-login').click()
        cy.get('#Email').clear().type(this.ldata.email)
        cy.get('#Password').clear().type(this.ldata.password)
        cy.get('button[class="button-1 login-button"]').click()
    })
})