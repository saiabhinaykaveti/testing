describe("Testing the Sethu project",function(){
    xit('captured the header section',function(){
        cy.visit('https://hometutor.sethu-ai.com/v0.2.8/')
        cy.get('.fw-bolder.title1.align-center').should('have.text','Home Tutor')
        cy.get('.col-md-9.col-sm-8.col-6.align-items-center.header-icons').within(()=>{
            cy.contains('How It Works').should('contain','How It Works')
            cy.get('.position-relative.cursor-pointer').should('contain','Community')
            cy.contains('About').should('contain','About')
            cy.get('.btn').should('be.visible');
        })
        
        
    })

    xit('captured the numbers in home page',function(){
        cy.visit('https://hometutor.sethu-ai.com/v0.2.8/')
        cy.get('.row > :nth-child(1) > div > h1.text-center').should('be.visible');
        cy.get('.row > :nth-child(1) > div > h1.text-center').should('have.text', '12+');
        cy.get(':nth-child(2) > h1.text-center').should('be.visible');
        cy.get(':nth-child(2) > h1.text-center').should('have.text', '11+');
        cy.get(':nth-child(3) > h1.text-center').should('be.visible');
        cy.get(':nth-child(4) > h1.text-center').should('be.visible');
        cy.get(':nth-child(4) > h1.text-center').should('have.text', '50+');
        cy.get(':nth-child(5) > h1.text-center').should('be.visible');
        cy.get(':nth-child(3) > h1.text-center').should('be.visible');
        cy.get(':nth-child(3) > h1.text-center').should('have.text', '40+');
        cy.get(':nth-child(5) > h1.text-center').should('be.visible');
        cy.get(':nth-child(5) > h1.text-center').should('have.attr', 'style', 'text-shadow: rgba(239, 174, 163, 0.6) 0px 0px 5px, rgba(228, 169, 143, 0.8) 0px 0px 15px; color: rgb(0, 51, 102);');
    })

    it('checking dynamic values',function(){
        cy.visit('https://hometutor.sethu-ai.com/v0.2.8/')
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

    xit('another checking', function () {
        cy.visit('https://hometutor.sethu-ai.com/v0.2.8/');
        cy.wait(20000)
        // Ensure the element exists and has text content
        cy.get('.row > :nth-child(5) > div > h1.text-center')
          .should('not.have.text', '')  // Ensure element has some text content
          .should(($el) => {
            const text = $el.text().trim();
            cy.log(`Captured Value: ${text}`); // Log the captured value for debugging
      
            // Validate the captured text matches the expected format (e.g., "12+")
            expect(text).to.match(/^\d+\+$/); // Ensure it is a number followed by "+"
          });
      });
    })