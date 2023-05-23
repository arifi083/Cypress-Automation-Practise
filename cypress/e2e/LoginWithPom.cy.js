import Login from "../PageObjects/LoginPage.js";
import Login2 from "../PageObjects/LoginPage2.js";

describe('POM', () => {

    it.skip('Logintest General Process', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
       
    })

    it.skip('Logintest With POM', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln = new Login();
        ln.setUserName("Admin") 
        ln.setPassword("admin123") 
        ln.clickSubmit()
        ln.verifyLogin()
    
    })


    it.skip('Logintest With POM Another Process', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 

        const ln2 = new Login2();
        ln2.setUserName("Admin")
        ln2.setPassword("admin123")
        ln2.clickSubmit()
        ln2.verifyLogin()
    
    })


    it('Logintest With POM Fixture Value', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm").then( (data)=>{
            const ln2 = new Login2();
            ln2.setUserName(data.username)
            ln2.setPassword(data.password)
            ln2.clickSubmit()
            ln2.verifyLogin(data.expected)

        })

       
    
    })




   


  })