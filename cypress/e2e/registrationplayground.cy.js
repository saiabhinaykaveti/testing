describe('register the user with playground option',function(){
    beforeEach(()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/',{
          auth :{
            username: "11213174",
            password: "60-dayfreetrial"
          }
        })
      })
    it('user is able to register the with correct credentials',function(){
        cy.get('.ico-register').click()
        cy.get('img')
        cy.get('h1').should('have.text','Register')
        cy.get('form > :nth-child(1) > .title > strong').should('contain','Your')
        cy.get('form > :nth-child(1) > .title > strong').should('have.text','Your Personal Details')
        cy.get('.male > .forcheckbox').should('have.text','Male')
        cy.get('#gender-male').should('be.enabled')
        cy.get('#gender-male').click()
        cy.get('#FirstName').should('be.visible')
        cy.get('#FirstName').should('be.enabled')
        cy.get('#FirstName').type('saiabhinay').should('have.value','saiabhinay')
        cy.get('#LastName').should('be.visible')
        cy.get('#LastName').should('be.enabled')
        cy.get('#LastName').type('kaveti').should('have.value','kaveti')
        cy.get('#Email').should('be.visible')
        cy.get('#Email').should('be.enabled')
        cy.get('#Email').type('sairam1234@gmail.com').should('have.value','sairam1234@gmail.com')
        cy.contains('Company Details')
        cy.get('#Company').should('be.enabled')
        cy.get('#Company').should('be.enabled')
        cy.get('#Company').type('Ramanasoft solutions').should('have.value','Ramanasoft solutions')
        cy.get(':nth-child(4) > .title > strong').should('have.text','Your Password')
        cy.get('#Password').should('be.enabled')
        cy.get('#Password').should('be.visible')
        cy.get('#Password').type('Saisunny@9').should('have.value','Saisunny@9')
        cy.get('#ConfirmPassword').should('be.enabled')
        cy.get('#ConfirmPassword').should('be.visible')
        cy.get('#ConfirmPassword').type('Saisunny@9').should('have.value','Saisunny@9')
        cy.get('#register-button').click()
        cy.get('.result').should('contain','Your registration completed')
        cy.get('.buttons > .button-1').click()
    })
})