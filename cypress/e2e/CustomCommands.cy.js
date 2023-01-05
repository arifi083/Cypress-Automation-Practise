describe('Custom Commands', () => {

    it.skip('Handling Links', () => {
      
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it.skip('Creat Custom Commands Handling Links', () => {
      
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.wait(3000)
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })




   //over write the existing commands
    // it.skip('OverWrite the Existing Commands', () => {
      
    //     cy.visit("https://demo.nopcommerce.com/")
    //     cy.clickLink('APPLE MACBOOK PRO 13-inch')    //not working
        
    //     cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    // })


    it('Login', () => {
      
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Log in')   
        cy.loginapp("arifiubat066@gmail.com","12345678")
        cy.get(".ico-account").should('have.text','My account')
    })


  


  })