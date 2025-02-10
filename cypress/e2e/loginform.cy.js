/// <reference types="cypress"/>
describe('login form',function(){
    xit('checking with valid credentials',function(){
        cy.visit('https://hometutor.sethu-ai.com/v0.2.8b/')
    })
    xit('new',function(){
        cy.visit('https://example.cypress.io/')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu>li').eq('16').click()

    })

    it('with in the command',function(){
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('.query-form').within(()=>{
            cy.get('#inputEmail').type('sai').should('have.value','sai')
        })
    })

    it('root element',function(){
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('.query-list').within(()=>{
            cy.contains('apples').should('have.text','apples')
            cy.root().should('have.class','query-list')
        })
        cy.root().should('match','html')
    })

    it('children command',function(){

        // children() command is used to get the childrens of selected DOM element
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-list').children().should('have.length','5')
        cy.get('.traversal-list').children().eq(0).should('have.text','tabby')
    })

    it('cloest ancestor',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-badge')
        .closest('ul')
        .should('have.class','list-group')
    })

    it('eq command',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-list>li').eq(0).should('have.text','tabby')
        cy.get('.pagination.traversal-pagination>li').eq(1).should('have.text','1')
    })

    it('filter command',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-breadcrumb>li').filter('.active')
    })

    xit('finding the element',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.birds.list-group').filter('.list-group-item.active')
    })

    it('select the first element in list',function(){
       cy.visit('https://example.cypress.io/commands/traversal')
       cy.get('.table.traversal-table').find('th').eq(0).should('have.text','#')
       cy.get('.table.traversal-table').find('th').eq(2).should('have.text','Last Name')
    })

    it('next element',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-ul>li').first().next().should('have.text','oranges')
    })

    it('not command',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.nav.nav-pills.traversal-pills .active').should('match','Home')
        
    })
})