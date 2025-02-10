describe('test it ',function(){

    xit('test',function(){
        cy.visit('http://127.0.0.1:8080/cypress/e2e/html/first.html')
        cy.get('#message').should('contain','Hello, Cypress!')
    })
})