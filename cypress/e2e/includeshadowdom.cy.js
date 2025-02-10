///<reference types="cypress" />

describe('cypress.config() options',{ includeShadowDom:true,}, ()=>{

    it('cypress.config() to retrieve all values',()=>{
     cy.visit('/')
     cy.log('suite level config',Cypress.config('includeShadowDom'))
     Cypress.config({
            includeShadowDom:false,
        baseurl:'https://cypress.io',
     })
     cy.log('latest confi file ',Cypress.config('includeShadowDom'))


    })
    xit('Cypress.config(name) - retrieve only specific configuration',()=>{
     cy.visit('/')
     cy.log('before setting Cypress.config() -base URL,shadowdom :',Cypress.config('baseUrl'),Cypress.config('includeShadowDom'))
     Cypress.config({
        defaultCommandTimeout: 10000,
        viewportHeight: 900,
        baseURL:'https://cypress.io',
        includeShadowDom:true,
      })
     cy.log('current base URL is',Cypress.config('baseUrl'),Cypress.config('includeShadowDom'),Cypress.config())

    })
})