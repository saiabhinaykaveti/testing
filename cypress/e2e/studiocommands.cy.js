describe('registered the user with the studio command',function(){
  
  beforeEach(()=>{
    cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/',{
      auth :{
        username: "11213174",
        password: "60-dayfreetrial"
      }
    })
  })
    it('verify that user is able to view and click on the Registration button.',function(){
        
        cy.get('.ico-register').should('be.visible');
        cy.get('.ico-register').should('have.text', 'Register');
        cy.get('.ico-register').should('have.class', 'ico-register');
        cy.get('.ico-register').should('have.attr', 'href', '/register?returnUrl=%2F');
        cy.get('.ico-register').click();
        
    })

    it('Verify user is able view the Registration fields',function(){
      //cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/register?returnUrl=%2F',)
      cy.get('.ico-register').click()
      cy.get('h1').should('be.visible');
      cy.get('h1').should('have.text', 'Register');
      cy.get('.male > .forcheckbox').should('be.visible');
      cy.get('.female > .forcheckbox').should('be.visible');
      cy.get('#FirstName').should('be.visible');
      cy.get('#LastName').should('be.visible');
      cy.get('#Email').should('be.visible');
      cy.get('#Company').should('be.visible');
      cy.get('#Password').should('be.visible');
      cy.get('#ConfirmPassword').should('be.visible');
      cy.get('#register-button').should('be.visible');
      
    })

    it('Verify user is able to select that any one of the  radio button of either male or female radio buttons.',function(){
      cy.get('.ico-register').click();
      cy.get('#gender-male').should('be.enabled');
      cy.get('#gender-male').check();
      cy.get('#gender-female').should('be.enabled');
      cy.get('#gender-female').check();
      cy.get('#gender-male').check();

      
    })
    it('Verify that user is able to enter the data in the first name field',function(){
      
      cy.get('.ico-register').click();
      cy.get('#FirstName').type('sai');
      
    })
    it('Verify that user is able to enter min 6 and max 64 characters in the first name field.',function(){
      cy.get('.ico-register').click();
      cy.get('#FirstName').type('saiabhu');
      cy.get('#FirstName').clear('sa');
      cy.get('#FirstName').type('saiabhinaykumar');
      cy.get('#FirstName').clear();
      cy.get('#FirstName').type('aiabhinaykumarabhinaykumarasdsdfsdfsdfjsdfkjsdfdsfksdfkdsfjk');
      
    })
    it('Verify that user trying to enter less than 6 or more than 64 characters in the first name field',function(){
      cy.get('.ico-register').click();
      cy.get('#FirstName').clear('sa');
      cy.get('#FirstName').type('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
      
    })
    it('Verify that user is able to enter the data in the last name field',function(){
      cy.get('.ico-register').click();
      cy.get('#LastName').type('kaveti');
      
    })
    it('Verify that user is able to enter min 6 and max 64 characters in the last name field.',function(){
      cy.get('.ico-register').click();
      cy.get('#LastName').clear('k');
      cy.get('#LastName').type('kavetiiiiiiiiiiiiiiiiiiiiiiiikkkkkkkkkkkkkkkkkkjjjjjjjjjjjjj');
      
    })
    it('Verify that user trying to enter less than 6 or more than 64 characters in the last name field',function(){
      
      cy.get('.ico-register').click();
      cy.get('#LastName').clear('sa');
      cy.get('#LastName').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      
    })
    it('Verify user is able to enter valid mail id format in the email id field.',function(){
      cy.get('.ico-register').click();
      cy.get('#Email').type('saiabhinay@gmail.com');
    })
    it('Verify that user is able to enter invalid mail id format in the email id field',function(){
      cy.get('.ico-register').click();
      cy.get('#Email').type('saiabhinaysdsfsdf');
      cy.get('#Email-error').should('have.text', 'Please enter a valid email address.');
      
    })
    it('Verify that user is able to enter the data in the company name field',function(){
      cy.get('.ico-register').click();
      cy.get('#Company').type('Ramanasoft solutions');
    })
    it('Verify that user trying to enter less than 6 or more than 64 characters in the company name field',function(){
      cy.get('.ico-register').click();
      cy.get('#Company').type('ramanasoftramanasoftramanasoftramanasoftramanasoftramanasoft');
    })
    it('Verify user is able to select the check box for the newsletter field',function(){
      cy.get('.ico-register').click();
      cy.get('#Newsletter').uncheck();
      cy.get('#Newsletter').check();
    })
    it('Verify that user is able to enter the data in the password field',function(){
      cy.get('.ico-register').click();
      cy.get('#Password').type('Saisunn');
    })
    it('Verify that user is able to enter min 6 and max 64 characters in the password field.',function(){
      cy.get('.ico-register').click();
      cy.get('#Password').clear('sa');
      cy.get('#Password').type('saiabhinaykumarsaiabhinaykumarsaiabhinaykumarsaiabhinaykumarsaiabhinaykmumarsaiasdas');
    })
    it('Verify that user trying to enter less than 6 or more than 64 characters in the password field',function(){
      cy.get('.ico-register').click();
      cy.get('#Password').type('saia');
      cy.get('#Password').clear('saiaa');
      cy.get('#Password').type('saiaaasaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd');
    })
    it('Verify that user is able to enter the data in the confirm password field',function(){
      cy.get('.ico-register').click();
      cy.get('#ConfirmPassword').type('saiabhinaykumart');
      
    })
    it('Verify that user is able to enter min 6 and max 64 characters in the confirm  password field.',function(){
      cy.get('.ico-register').click();
      cy.get('#ConfirmPassword').clear('S');
      cy.get('#ConfirmPassword').type('Saisunny');
      cy.get('#ConfirmPassword').clear('sa');
      cy.get('#ConfirmPassword').type('saisunnyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
      
    })
    it('Verify that user trying to enter less than 6 or more than 64 characters in the confirm password field',function(){
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.ico-register').click();
      cy.get('#ConfirmPassword').type('Saisunny');
      cy.get('#ConfirmPassword').type('saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  
    })
    it('Verify after entering the  details user is able to click on registration button.',function(){
      cy.get('.ico-register').click();
      cy.get('#gender-male').check();
      cy.get('#FirstName').type('saiabhinay');
      cy.get('#LastName').type('kaveti');
      cy.get('#Email').type('saisunny456@gmail.com');
      cy.get('#Company').type('Ramansoft');
      cy.get('#Password').type('Saisunny@9');
      cy.get('#ConfirmPassword').clear();
      cy.get('#ConfirmPassword').type('Saisunny@9');
      cy.get('#register-button').click();
    })
    it('Verify after entering the correct details and if user click on registration button user is able to navigate to the login page.',function(){
      cy.get('.ico-register').click();
      cy.get('#gender-male').check();
      cy.get('#FirstName').clear('k');
      cy.get('#FirstName').type('kumar');
      cy.get('#LastName').clear();
      cy.get('#LastName').type('krishna');
      cy.get('#Email').clear();
      cy.get('#Email').type('kishna@gmail.com');
      cy.get('#Company').clear();
      cy.get('#Company').type('testing values');
      cy.get('#Password').clear('t');
      cy.get('#Password').type('testing@123');
      cy.get('#ConfirmPassword').clear();
      cy.get('#ConfirmPassword').type('testing@123');
      cy.get('#register-button').click();
      cy.get('.result').should('have.text', 'Your registration completed');
      cy.get('.buttons > .button-1').should('be.visible');
      cy.get('.buttons > .button-1').click();
    })
    it.only('Verify that without entering the data  user is trying to click on registration button',function(){
      cy.get('.ico-register').click();
      cy.get('#register-button').click();
      cy.get('#FirstName-error').should('have.text', 'First name is required.');
      cy.get('#LastName-error').should('have.text', 'Last name is required.');
      cy.get('#Email-error').should('have.text', 'Email is required.');
      cy.get('#ConfirmPassword-error').should('have.text', 'Password is required.');
    })







})