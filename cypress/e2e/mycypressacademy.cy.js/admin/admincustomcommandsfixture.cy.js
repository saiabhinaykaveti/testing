/// <reference types='cypress'/>
describe('login the admin with custom commands',function(){
    beforeEach(()=>{
        cy.adloginwithauth('11213174','60-dayfreetrial')
        cy.fixture('example.json').as('aldata')
    })
    it('login with valid credentials',function(){
        cy.login(this.aldata.validEmail,this.aldata.validPassword)
        cy.logout()
    })

    it('login with invalid email and correct password',function(){
        /*const invalidemail='admin1@yourstore.com'
        const validpassword='adminadmin'*/
        cy.login(this.aldata.invalidEmail,this.aldata.validPassword)
        
    })

    it('login with valid and invalid credentials',function(){
        const validemail='admin@yourstore.com'
        const invalidpassword='adminadmin1234'
        cy.login(validemail,invalidpassword)
    })
    it('login with invalid email and invalid password',function(){
        const invalidemail='admin1@yourstore.com'
        const invalidpassword='adminadmin1234'
        cy.login(invalidemail,invalidpassword)
    })
    it('login with empty email and password',function(){
        const invalidemail=' ';
        const invalidpassword=' ';
        cy.login(invalidemail,invalidpassword)
    })

})