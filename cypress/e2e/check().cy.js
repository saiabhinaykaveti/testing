describe('select the check boxes',function(){
    it('select the single checkbox',function() {
        cy.viewport('ipad-2','portrait')
      cy.visit('https://example.cypress.io/commands/actions')
      //select the single checkbox
       cy.get('.action-multiple-checkboxes>.checkbox>label>[value="checkbox1"]')
        cy.get('.action-multiple-checkboxes [value="checkbox1"]').check().should('be.checked')
        cy.get('.action-multiple-checkboxes [value="checkbox1"]').uncheck().should('not.be.checked')
        // select the multiple checkboxes
        cy.get('.action-multiple-checkboxes [type="checkbox"]').check().should('be.checked')

    });
})