describe('Link Target Attribute', () => {
    it('should have the correct target attribute', () => {
      cy.visit('https://example.com');


      /* ==== Generated with Cypress Studio ==== */
      cy.get('a[href="https://www.iana.org/domains/example"]').click()
      .should('have.attr', 'target', '_blank');
      /* ==== End Cypress Studio ==== */
      
    });
  });