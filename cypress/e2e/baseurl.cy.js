/// <reference types='cypress'/>
describe('checking the  url',{includeShadowDom:true},function(){
    it('base url',function(){
        // base url is: https://example.cypress.io
        cy.visit('')
        cy.url().should('eq','https://example.cypress.io/')
        cy.get('h1').should('contain','Kitchen Sink')
        cy.get('.dropdown-toggle').click()
        cy.contains('Querying').click()
        cy.log(Cypress.config('includeShadowDom'))
        Cypress.config({
            includeShadowDom:false
        })
        cy.log(Cypress.config('includeShadowDom'))
        cy.getCookies()
    })


    it('base url with extra url as suffix',function(){
      // base url is: https://example.cypress.io
        cy.visit('/commands/querying')
        cy.url().should('eq','https://example.cypress.io/commands/querying')
        cy.get('h1')
        cy.get('.dropdown-toggle').click()
        cy.contains('Traversal').click()
        cy.url().should('eq','https://example.cypress.io/commands/traversal')
    })

    it('base url with another suffix', function() {
  cy.visit('/commands/actions');
  cy.contains('Actions');
 //Cypress.config();
 cy.log(Cypress.config())
   cy.log(Cypress.config('viewportWidth',960))
   
  
})

    xit('cypress.config() to retrieve all values',()=>{
        cy.visit('/')
        cy.log('suite level config',Cypress.config('includeShadowDom'))
        Cypress.config({
               includeShadowDom:false,
           baseurl:'https://cypress.io',
        })
        cy.log('latest confi file ',Cypress.config('includeShadowDom'))
   
      
       })
})