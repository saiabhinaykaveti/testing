describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/',{
      auth :{
        username: "11213174",
        password: "60-dayfreetrial"
      }
    })

    cy.get('.ico-register').should('be.visible');
    cy.get('.ico-register').should('have.text', 'Register');
    cy.get('.ico-register').click();
    cy.get('.male > .forcheckbox').should('be.visible');
    cy.get('.female > .forcheckbox').should('be.visible');
    cy.get('#FirstName').should('be.visible');
    cy.get('#LastName').should('be.visible');
    cy.get('#Email').should('be.visible');
    cy.get('#Company').should('be.visible');
    cy.get('#Password').should('be.visible');
    cy.get('#ConfirmPassword').should('be.visible');
    cy.get('.page-body > form').should('be.visible');

    
    cy.get('#gender-male').should('be.visible');
    cy.get('#gender-male').should('be.enabled');
    cy.get('#gender-male').check();
    cy.get('#gender-female').check();
    cy.get('#gender-male').should('have.id', 'gender-male');
    
  })
})