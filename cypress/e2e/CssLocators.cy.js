describe('CssLocators facebook', () => {

    it('csslocators', () => {
      
        cy.visit("https://www.facebook.com/")
        cy.get("input#email").type("arifatif163@gmail.com")
        cy.get("input#pass").type("atif6is*")
       // cy.get('[data-testid="royal_login_button"]').click()
        cy.get("[type='submit']").click();
      
    })

  


  })