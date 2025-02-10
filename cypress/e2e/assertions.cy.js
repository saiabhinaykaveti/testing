describe('checking the assertions',function(){
    it('checking should method',function(){
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('#query-btn').should('be.visible').should('be.enabled')
    })

    it('check chaining command as and()',function(){
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('#inputName')
        .should('be.visible')
        .and('be.enabled')
        cy.get('#inputName').type('saiabhinay')
        .should('have.value','saiabhinay')
    })

    it('not.be.visible assertion',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-div').dblclick()
        cy.get('.action-div').should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
        cy.get('.action-input-hidden').clear()
        cy.get('.action-input-hidden').type('enter the data')
        .should('have.value','enter the data')  
        
    })
    it('not.be.visible assertion',function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('[value="checkbox2"]').should('be.disabled')
        cy.get('.action-checkboxes > .checkbox.disabled >label> [value="checkbox2"]').should('be.disabled');
        
    })

    it('checking the form by using within()',function(){
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('.query-form').within(()=>{
              cy.get('[id="inputEmail"]').type('saiabhinay').should('have.value','saiabhinay')
        })
    })
    it('checking the register form in nopcommerece',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/',{
            auth:{
                username: "11213174",
                password: "60-dayfreetrial"
            }
        })
        cy.get('[href="/login?returnUrl=%2F"]').should('be.visible');
        cy.get('[href="/login?returnUrl=%2F"]').click();
        cy.get('.returning-wrapper.fieldset').within(()=>{
            cy.get('[data-val-required="Please enter your email"]').type('saiabhi123@gmail.com')
            .should('have.value','saiabhi123@gmail.com')
          cy.get('#Password').type('Saisunny@9')
          .should('have.value','Saisunny@9')
          cy.get('[type="checkbox"]').check().should('be.checked')
          cy.get('[type="submit"]').click()
        })
        cy.contains('Welcome to our store')
        //cy.get('.top-menu.notmobile').click()


        
        cy.get('.header-links>ul').children().should('have.length','4')
        
    })


    it('children command',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-breadcrumb').children()
        cy.get('.traversal-breadcrumb').children('.active')
        .should('contain','Data')
    })


    it('checking the tables list by using children command',function(){
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/admin',{
            auth:{
                   username: "11213174",
                password: "60-dayfreetrial"
            }

        })
        cy.get('#Email').type('admin@yourstore.com');
        cy.get('#Password').type('adminadmin');
        cy.get('form > .buttons > .button-1').click();
        cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click();
        cy.get('#nopSideBarPusher').click({force: true})
        cy.get('[href="/Admin/Product/List"]').click()
        cy.get('.dataTables_scroll')


        
    })


    it('select the one value based on the specified index',function(){

        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/admin',{
            auth:{
                   username: "11213174",
                password: "60-dayfreetrial"
            }

        })
        cy.get('#Email').type('admin@yourstore.com');
        cy.get('#Password').type('adminadmin');
        cy.get('form > .buttons > .button-1').click();
        cy.get('.nav-pills > :nth-child(2)').click();
        cy.get('.nav-pills > :nth-child(2)>.nav-treeview>li')
    })

    it('by using eq command',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-nav.nav.nav-tabs>li').eq(0)
        .should('have.text','Home')
    })

    it('checking the filter command',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-nav.nav.nav-tabs>li>a').filter('[href="#"]')
        
    })

    it.only('find () command is used to get all the descedent dom element',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-list').find('li').should('have.length','7')
    })





})