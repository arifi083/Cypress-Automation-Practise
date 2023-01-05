describe('Check UI Elements', () => {

    it.skip('Checking Radio Button', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibilty of radio button
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")

        //selecting radio button
        cy.get("input#male").check().should('be.visible')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.visible')
        cy.get("input#male").should('not.be.checked')
  
    })

    it('Checking Radio box', () => {
      
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibilty of radio button
        //cy.get("input#monday").should("be.visible")

        //selecting single chekbox
        //cy.get("input#monday").check().should('be.checked')

        //unselecting single chekbox
       // cy.get("input#monday").uncheck().should('not.be.checked')


        //selecting all the checkbox
       // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselecting all the checkbox
         //cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

         //selecting fast element
         //cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

         //selecting last element
         cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

        


        
    })


   


  })