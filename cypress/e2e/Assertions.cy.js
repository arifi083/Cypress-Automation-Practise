
describe('Assertions demo', () => {

    it.skip('Implicit Assertions', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        // cy.url().should('include','orangehrmlive')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

        // cy.url().should('include','orangehrmlive')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain','orangehrm')
        // .and('not.contain','greenhrm')
        //cy.get(".lighter").contains("T-shirt")  // contains using system .alada vbe just bojer jnno.

        //image assertion
        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        // .and('exist')

        //all the link present in the webpage
        //cy.xpath("//a").should('have.length','5')
        //cy.xpath('//a').should('have.length', 3)

        // cy.get("input[placeholder='Username']").type("Admin")
        // cy.get("input[placeholder='Username']").should('have.value','Admin')


    })

    it('explicit assertions', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click();

        let expName ="Paul Collings";

        cy.get(".oxd-userdropdown-name").then(  (x)=>{
            let actName=x.text();
            //bdd style
            expect(actName).to.equal(expName)
           // expect(actName).to.not.equal(expName)

            //tdd style
            assert.equal(actName,expName)
            //assert.notEqual(actName,expName)

        })
    })

   


  })