describe('MyTestSuite', () => {

    //direct access
    it.skip('FixtureDemoTest', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")

        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

    })

    
    //access fixture json data
    it.skip('Fixture Demo Test Json Data', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm.json').then( (data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
    
            cy.get("button[type='submit']").click();
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)

        })
        
       

    })




   //access through hook for multiple it block
   let userData;    
    before( ()=>{
        cy.fixture('orangehrm').then( (data)=>{     //orangehrm sob data load hoyse and segulo amra next block a use krse
            userData = data;
        })

    })

    
    it('FixtureDemoTest1 for fixtures data', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      
        cy.get("input[placeholder='Username']").type(userData.username)
        cy.get("input[placeholder='Password']").type(userData.password)
    
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userData.expected)

      
        
    })


    


  })