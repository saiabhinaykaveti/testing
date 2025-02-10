// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login',(email,password)=>{
    cy.get('.ico-login').click()
    cy.get('#Email').clear().type(email)
    cy.get('#Password').clear().type(password)
    cy.get('[type="submit"]').eq(1).click()
})

Cypress.Commands.add('logout',()=>{
    cy.get('[href="/logout"]').click()
})

Cypress.Commands.add('loginwithauth',(uname,pwd)=>{
    cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/',{
        auth:{
            username:uname,
            password:pwd
        }
    })
})
Cypress.Commands.add('clicklink',(label)=>{
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('adloginwithauth',(adminusername,apwd)=>{
    cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/login?ReturnUrl=%2Fadmin',{
        auth:{
            username:adminusername,
            password:apwd
        }
       

    })
})
