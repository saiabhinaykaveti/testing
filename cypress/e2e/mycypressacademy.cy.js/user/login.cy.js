/// <reference types='cypress' />

describe('user login',function(){
    it('ligoin with valid credentials',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
        cy.get('.ico-login').should('be.visible')
        cy.get('.ico-login').click()
        cy.url().should('eq','http://abhinaykaveti-001-site1.ltempurl.com/login?returnUrl=%2F')
        cy.get('[for="Email"]').should('have.text','Email:')
        cy.get('#Email').should('be.enabled')
        cy.get('#Email').clear().type('abhinaykavetikrishna@gmail.com')
        cy.get('#Password').clear().type('Saisunny@9')
        cy.get('[for="RememberMe"]').should('have.text','Remember me?')
        cy.get('#RememberMe').click()
       // cy.contains('Log in').should('be.enabled')
        cy.get('button[class="button-1 login-button"]').click()
        cy.get('.ico-account').should('be.visible')
        cy.get('.ico-logout').should('be.visible')
    })

    it('login with correct email and incorrect password',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })

        cy.get('.ico-login').should('be.visible')
        cy.get('.ico-login').click()
        cy.url().should('eq','http://abhinaykaveti-001-site1.ltempurl.com/login?returnUrl=%2F')
        cy.get('[for="Email"]').should('have.text','Email:')
        cy.get('#Email').should('be.enabled')
        cy.get('#Email').clear().type('abhinaykavetikrishna@gmail.com')
        cy.get('[for="Password"]').should('have.text','Password:')
        cy.get('#Password').clear().type('Saisunny@95')
        cy.get('[for="RememberMe"]').should('have.text','Remember me?')
        cy.get('#RememberMe').click()
        cy.get('[type="submit"]').eq(1).click()
        cy.get('div[class="message-error validation-summary-errors"]').should('include.text','Login was unsuccessful. Please correct the errors and try again.')

    })

    it('login with incorrect email and correct password',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })

        cy.get('.ico-login').should('be.visible')
        cy.get('.ico-login').click()
        cy.url().should('eq','http://abhinaykaveti-001-site1.ltempurl.com/login?returnUrl=%2F')
        cy.get('[for="Email"]').should('have.text','Email:')
        cy.get('#Email').should('be.enabled')
        cy.get('#Email').clear().type('abhinaykavetikri@gmail.com')
        cy.get('[for="Password"]').should('have.text','Password:')
        cy.get('#Password').clear().type('Saisunny@9')
        cy.get('[for="RememberMe"]').should('have.text','Remember me?')
        cy.get('#RememberMe').click()
        cy.get('[type="submit"]').eq(1).click()
        cy.get('div[class="message-error validation-summary-errors"]').should('include.text','Login was unsuccessful. Please correct the errors and try again.')
    })

    it('login with empty credentials',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })
        cy.get('.ico-login').should('be.visible')
        cy.get('.ico-login').click()
        cy.url().should('eq','http://abhinaykaveti-001-site1.ltempurl.com/login?returnUrl=%2F')
        cy.get('[for="Email"]').should('have.text','Email:')
        cy.get('[for="Password"]').should('have.text','Password:')
        cy.get('[for="RememberMe"]').should('have.text','Remember me?')
        cy.get('#RememberMe').click()
        cy.get('[type="submit"]').eq(1).click()
        cy.get('#Email-error').should('have.text','Please enter your email')
    })
})