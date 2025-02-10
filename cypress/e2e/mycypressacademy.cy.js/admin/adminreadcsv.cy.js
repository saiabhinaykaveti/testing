/// <reference types='cypress' />
  const neatCSV=require('neat-csv')
  let table;
  describe('Read the csv data through the neat-csv file',function(){
    
    beforeEach(()=>{
        
        cy.visit('http://abhinaykaveti-001-site1.ltempurl.com/login?ReturnUrl=%2Fadmin',{
            auth:
            {
                username:'11213174',
                password:'60-dayfreetrial',
            }
        }) 
        cy.readFile('cypress/fixtures/login.csv')
        .then(neatCSV)
        .then(function(data){
            table=data;
        })

    })
    xit('random values by using csv file',function(){
        cy.get('#Email').clear().type(table[0].Email)
        cy.get('#Password').clear().type(table[0].Password)
        cy.get('[type="submit"]').eq(1).click()
    })

    it('data through random file',function(){
        const randomValue1 = Math.floor(Math.random() * table.length);
        //cy.log(randomValue1)
        //cy.log(table.length)
        //cy.log(table[randomValue1])
        //cy.log(table[randomValue1].Email)
        //cy.log(table[randomValue1].Password)
        cy.get('#Email').clear().type(table[randomValue1].Email)
        cy.get('#Password').clear().type(table[randomValue1].password)
        cy.get('[type="submit"]').eq(1).click()

        
    })
  })