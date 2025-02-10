describe('checking the login form for user',function(){
    it('login with valid credentials',function(){
        cy.visit('https://hometutor.sethu-ai.com/')
        cy.contains('Sign-in').click()
        cy.get('#keep-mounted-modal-title').should('have.text','Login Page')
        cy.get('[type="email"]').type('kavetisaiabhinaykumar@gmail.com')
        cy.get('[type="password"]').type('13072fa640')
        cy.get('[type="submit"]').click()
        cy.contains('Login Successfull')
    })

    it('login with correct email id and incorrect password',function(){
        cy.visit('https://hometutor.sethu-ai.com/')
        cy.contains('Sign-in').click()
        cy.get('#keep-mounted-modal-title').should('have.text','Login Page')
        cy.get('[type="email"]').type('kavetisaiabhinaykumar@gmail.com')
        cy.get('[type="password"]').type('13072fa64')
        cy.get('[type="submit"]').click()
        cy.contains('Invalid email or password')
    })

    it('login with incorrect email id and correct password',function(){
        cy.visit('https://hometutor.sethu-ai.com/')
        cy.contains('Sign-in').click()
        cy.get('#keep-mounted-modal-title').should('have.text','Login Page')
        cy.get('[type="email"]').type('kavetisaiabhinaykumar1@gmail.com')
        cy.get('[type="password"]').type('13072fa640')
        cy.get('[type="submit"]').click()
        cy.contains('Invalid email or password')
    })

    it('click on submit button without entered the email and password',function(){

        cy.visit('https://hometutor.sethu-ai.com/')
        cy.contains('Sign-in').click()
        cy.get('#keep-mounted-modal-title').should('have.text','Login Page')
        cy.get('[type="submit"]').click()
        cy.contains('Email is required')
        cy.contains('Password is required')
    })
})