describe('checking filter and find command',function(){
    it('checking the find block',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-list').find('li').should('have.length','5')
    })
})