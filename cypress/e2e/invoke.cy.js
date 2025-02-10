describe('invoke',function(){
    it('test',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.trigger-input-range')
  .invoke('val',40)
cy.get('.trigger-input-range')
  //.trigger('change')
cy.get('.trigger-input-range')
  .get('input[type=range]').siblings('p')
  .should('have.text', '40')
    })
})