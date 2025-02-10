/// <reference types='cypress'/>
describe('customer registration',function(){
    it('register with correct credentails',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
           // verifying the title of the page
           cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]').clear().type('abhinaykavetikrishna@gmail.com')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').should('be.enabled')
            cy.get('#register-button').click()
            //cy.contains('Your registration completed')
    })

    it.only('Signup with mismatch passwords',()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
        cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]').clear().type('abhinaykavetikrishna123@gmail.com')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@95')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').click()
            cy.get('.field-validation-error').should('contain','The password and confirmation password do not match.')
           //cy.get('span[id="ConfirmPassword-error"]').should('have.text','The password and confirmation password do not match.')
        /*cy.get('.field-validation-error')
       .should('be.visible')
       .find('span[id="ConfirmPassword-error"]')
      .should('contain', 'The password and confirmation password do not match.');*/

      
      })

      it('signup with empty email ',()=>{
        //do not enter any value in the email field and try to complete the signup 
        //it will through an error message lets capture that error mmessage update your tests 
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
           // verifying the title of the page
           cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').should('be.enabled')
            cy.get('#register-button').click()
            cy.get('#Email-error').should('have.text','Email is required.')
            //cy.contains('Your registration completed')
    

    })
    it('signup with all mandatory fields with empty value',()=>{
        //do not enter any value in the email field and try to complete the signup 
        //it will through an error message lets capture that error mmessage update your tests 
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
           // verifying the title of the page
           cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            //cy.get('#FirstName').
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            //cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            //cy.get('[data-val-required="Email is required."]')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            //cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
           // cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').should('be.enabled')
            cy.get('#register-button').click()
            cy.get('#FirstName-error').should('have.text','First name is required.')
            cy.get('#LastName-error').should('have.text','Last name is required.')
            cy.get('#Email-error').should('have.text','Email is required.')
            cy.get('#ConfirmPassword-error').should('have.text','Password is required.')
            //cy.contains('Your registration completed')
    

    })
    it('signup with empty company name',()=>{
        
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
           // verifying the title of the page
           cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]').clear().type('abhinaykavetikrishna456@gmail.com')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').should('be.enabled')
            cy.get('#register-button').click()
            //cy.contains('Your registration completed')
    })
    it('signup with empty company name',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
           // verifying the title of the page
           cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]').clear().type('abhinaykavetikrishna@gmail.com')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').should('be.enabled')
            cy.get('#register-button').click()
            //cy.contains('Your registration completed')
    })

    it('signup with invalid email',()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
        cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]').clear().type('abhinaykavetikrishna789@')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').click()
            cy.get('#Email-error').should('have.text','Please enter a valid email address.')
           


      })

      it('signup with already existing email',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
           // verifying the title of the page
           cy.title().should('eq','Your store. Home page title')
            cy.get('.ico-register').click()
            cy.get('h1').should('have.text','Register')
            cy.get('.title').eq(0).should('have.text','Your Personal Details')
            cy.contains('Gender:')
            cy.get('[for="gender-male"]').should('have.text','Male')
            cy.get('[for="gender-female"]').should('have.text','Female')
            // select any one radio button either male or female
            cy.get('#gender-male').click()
            cy.get('[for="FirstName"]').should('have.text','First name:')
            cy.get('#FirstName').should('be.enabled')
            cy.get('#FirstName').clear().type('abhinaykaveti')
            cy.get('[for="LastName"]').should('have.text','Last name:')
            cy.get('#LastName').should('be.enabled')
            cy.get('#LastName').clear().type('krishna')
            cy.get('[for="Email"]').should('have.text','Email:')
            cy.get('[data-val-required="Email is required."]').should('be.enabled')
            cy.get('[data-val-required="Email is required."]').clear().type('abhinaykavetikrishna123@gmail.com')
            cy.get('.title').eq(1).should('have.text','Company Details')
            cy.get('[for="Company"]').should('have.text','Company name:')
            cy.get('#Company').should('be.enabled')
            cy.get('#Company').clear().type('onpassive technologies')
            cy.get('.title').eq(2).should('have.text','Options')
            cy.get('[for="Newsletter"]').should('have.text','Newsletter:')
            cy.get('#Newsletter').check()
            cy.get('#Newsletter').uncheck()
            cy.get('.title').eq(3).should('have.text','Your Password')
            cy.get('[for="Password"]').should('have.text','Password:')
            cy.get('#Password').should('be.enabled')
            cy.get('#Password').clear().type('Saisunny@9')
            cy.get('[for="ConfirmPassword"]').should('have.text','Confirm password:')
            cy.get('#ConfirmPassword').should('be.enabled')
            cy.get('#ConfirmPassword').clear().type('Saisunny@9')
            cy.get('#register-button').should('be.enabled')
            cy.get('#register-button').click()
            cy.contains('The specified email already exists')
            //cy.contains('Your registration completed')
    })



})