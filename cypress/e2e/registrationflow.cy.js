describe('Registration in nop ',function(){
    
    beforeEach(()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/',{
          auth :{
            username: "11213174",
            password: "60-dayfreetrial"
          }
        })
      })

    it('register the user with valid data',function(){
      cy.get('.ico-register').should('be.visible');
      cy.get('.ico-register').should('have.text', 'Register');
      cy.get('.ico-register').click();
      cy.get('.male > .forcheckbox').should('have.text', 'Male');
      cy.get('.female > .forcheckbox').should('have.text', 'Female');
      cy.get('#gender-male').should('be.visible');
      cy.get('#gender-male').should('be.enabled');
      cy.get('#gender-male').check();
      cy.get('#FirstName').should('be.visible');
      cy.get('#FirstName').should('be.enabled');
      cy.get('#FirstName').clear('s');
      cy.get('#FirstName').type('saiabhinay');
      cy.get('#LastName').should('be.visible');
      cy.get('#LastName').should('be.enabled');
      cy.get('#LastName').clear('k');
      cy.get('#LastName').type('kaveti');
      cy.get('#Email').should('be.visible');
      cy.get('#Email').should('be.enabled');
      cy.get('#Email').clear('sa');
      cy.get('#Email').type('saiabhi123@gmail.com');
      cy.get('#Company').should('be.visible');
      cy.get('#Company').should('be.enabled');
      cy.get('#Company').clear('o');
      cy.get('#Company').type('onpassive');
      cy.get('#Password').click();
      cy.get('#Password').should('be.visible');
      cy.get('#Password').should('be.enabled');
      cy.get('#Password').clear('S');
      cy.get('#Password').type('Saisunny@9');
      cy.get('#ConfirmPassword').should('be.visible');
      cy.get('#ConfirmPassword').should('be.enabled');
      cy.get('#ConfirmPassword').clear('S');
      cy.get('#ConfirmPassword').type('Saisunny@9');
      cy.get('#register-button').should('be.visible');
      cy.get('#register-button').should('be.enabled');
      cy.get('#register-button').click();
    })

    it('Validate Error Messages Displayed for Empty Fields on Registration',function(){
      cy.get('.ico-register').click();
      cy.get('#register-button').click();
      cy.get('#FirstName-error').should('have.text', 'First name is required.');
      cy.get('#LastName-error').click();
      cy.get('#LastName-error').should('have.text', 'Last name is required.');
      cy.get('#Email-error').should('have.text', 'Email is required.');
      cy.get('#ConfirmPassword-error').should('have.text', 'Password is required.');
    })
    it.only('another it block',function(){
      cy.get('.menu-toggle').click()
      cy.get('.mobile > :nth-child(1) > a').should('be.visible');
      cy.get('.mobile > :nth-child(1) > a').should('have.text', 'Home page');
      cy.get('.mobile > :nth-child(2) > a').should('be.visible');
      cy.get('.mobile > :nth-child(2) > a').should('have.text', 'New products');
      cy.get('.mobile > :nth-child(2) > a').click();
      cy.get('h1').should('have.text', 'New products');
      cy.get('.menu-toggle').click()
      cy.get('.mobile > :nth-child(3) > a').click()
      cy.get('.basic-search > :nth-child(1) > label').should('have.text','Search keyword:')
      cy.get('#q').should('be.visible');
      cy.get('#q').should('be.enabled');
      cy.get('#q').clear('sa');
      cy.get('#q').type('saiabhi@2gmail.com');
      cy.get('#advs').should('be.enabled');
      cy.get('#advs').check();
      cy.get('.buttons > .button-1').should('be.visible');
      cy.get('.buttons > .button-1').should('be.enabled');
      cy.get('.buttons > .button-1').click();
      cy.get('.no-result').should('have.text', 'No products were found that matched your criteria.');
      cy.get('.menu-toggle').click()
      
    })
})