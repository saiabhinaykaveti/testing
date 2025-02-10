/// <reference types='cypress' />

const { data } = require("ospath")

describe('read the file from specified location',function(){
    beforeEach(()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })  
        cy.readFile('cypress/fixtures/example.json').then(function(data){
            this.ldata=data
        })

        

    })

    it('login with valid credentials',function(){
        cy.get('.ico-login').click()
        cy.get('#Email').clear().type(this.ldata.email)
        cy.get('#Password').clear().type(this.ldata.password)
        cy.get('button[class="button-1 login-button"]').click()

    })
})