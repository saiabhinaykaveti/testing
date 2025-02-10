describe('nth-child',function(){
    it('checking the drop down',function(){
        cy.visit('https://example.cypress.io/')
    
        cy.get('[data-toggle="dropdown"]').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        
    })

    it('children of dom element',function(){
        cy.visit('https://example.cypress.io/')
        cy.get('[data-toggle="dropdown"]').click()
        //cy.get('.dropdown-menu').children('[href="/commands/querying"]').should('have.text','Querying')
         cy.get('.dropdown-menu>li').first().should('have.text','Querying')
         cy.get('.dropdown-menu>li').last().should('have.text')
    })
    it.only('next',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-ul').contains('apples').next().should('have.text','oranges')
        
    })
    it.only('next all',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-next-all>li').first().next()
        cy.get('.traversal-next-all>li').contains('oranges').nextAll()
        
    })
})