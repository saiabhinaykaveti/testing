describe('read file by using then',function(){
    beforeEach(()=>{
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        })  
        cy.readFile('rootfile.json').as('adata')
    })
    it('login with valid credentials',function(){
        cy.get('.ico-login').click()
        cy.get('#Email').clear().type(this.adata.email)
        cy.get('#Password').clear().type(this.adata.password)
        cy.get('button[class="button-1 login-button"]').click()

    })
})