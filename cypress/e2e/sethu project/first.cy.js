///<reference types="cypress"/>
describe('test',function(){

    it.only('checking value of learning topics',function(){
        cy.visit('https://hometutor.sethu-ai.com')
        cy.wait(2000)
        cy.get('.row > :nth-child(1) > div > h1.text-center')
        .invoke('text')
        
        .then((text)=>{
            cy.log(`First value: ${text}`);
            expect(text.trim()).to.match(/^\d+\+$/)
            cy.contains('Learning Topics')
        })

        
    })
    it('checking value of Interview Panalists',function(){
        cy.visit('https://hometutor.sethu-ai.com')
        cy.wait(2000)
        cy.get('.row>:nth-child(2)>h1.text-center')
        .invoke('text')
        .then((text)=>{
            cy.log(`secondvalue:${text}`)
            expect(text.trim()).to.match(/^\d+\+$/)
               cy.contains('Interview Panalists')
        })
    })

    it('checking the value of Active Interviews',function(){
        cy.visit('https://hometutor.sethu-ai.com')
        cy.wait(2000)
        cy.get('.row>:nth-child(4)>h1.text-center')
        .invoke('text')
        .then((text)=>{
            cy.log(`fourth value:${text}`)
            expect(text.trim()).to.match(/^\d+\+$/)
            cy.contains('Active Interviews')
        })
    })


    it('checking dynamic values',function(){
        cy.visit('https://hometutor.sethu-ai.com')
        cy.wait(2000)
        cy.get(':nth-child(3)>h1.text-center')
        .invoke('text')
        cy.log('')
        .then((headertext) => {
          cy.log(`First value: ${headertext}`);
          expect(headertext.trim()).to.match(/^\d+\+$/);
          cy.contains('Active Aspirants')
        });
        
    })

    it ('checking dynamic values',function(){
        cy.visit('https://hometutor.sethu-ai.com/')
        cy.wait(2000)
        cy.get(':nth-child(5) > h1.text-center')
        //.should('not.have.text', 'NaN+')
       // .should('not.have.text','0+')
        .invoke('text')
        .then((text) => {
          cy.log(`First value: ${text}`);
          expect(text.trim()).to.match(/^\d+\+$/);
        });
        
    })

})