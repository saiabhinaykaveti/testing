const { filter } = require("bluebird");

describe('test',function(){
  xit('should type into input fields, excluding the disabled one', () => {
    cy.visit('http://127.0.0.1:8080/cypress/e2e/html/second.html')
    cy.contains('Submit').click()
    // Select all input fields and type into the ones that are not disabled
    //cy.get('input.input-field').not('.disabled').type('Hello, Cypress!');
  });

  it.only('checking the previous value of an Conures',function(){
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.get('.birds.list-group').find('li')
    .filter('.list-group-item.active').prev()
    .should('contain','Lorikeets')
    
  })

  it('focus the password field',function(){
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-blur').type('About to blur')
cy.get('.action-blur').blur()
cy.get('.action-blur').should('have.class', 'error')
  .prev().should('have.attr', 'style', 'color: red;')
  })

  it('submitting a form',function(){
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-form')
    .find('[type="text"]').type('saiabhinay')
    cy.get('.action-form').submit()
    .next().should('contain','Your form has been submitted!')
  })

  it('submitting a form',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[action="/web/index.php/auth/validate"]').within(()=>{
      cy.get('[placeholder="Username"]').type('Admin')
      cy.get('[placeholder="Password"]').type('admin123')
      cy.get('.oxd-form-actions.orangehrm-login-action').click()
    })

  })
  
  it('submitting a form',function(){
    cy.visit('https://example.cypress.io/commands/traversal')


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.traversal-disabled > :nth-child(2)').should('have.attr', 'type', 'button');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(3) > a').click();
    cy.get('#email1').clear('s');
    cy.get('#email1').type('saiabhinay');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email1').should('have.value', 'saiabhinay');
    /* ==== End Cypress Studio ==== */
  })
    
})