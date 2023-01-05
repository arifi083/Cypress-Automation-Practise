describe('Navigation', () => {

    it('Navigation Test', () => {
      
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')  //home page
        cy.get("li:nth-child(7) a:nth-child(1)").click();  //camera page
        cy.get("div[id='content'] h2").should('have.text','Cameras')  //check camera validation
        
        cy.go('back') //got to back home
        cy.title().should('eq','Your Store') //chek home page titie

        cy.go('forward')  //go to camera page
        cy.get("div[id='content'] h2").should('have.text','Cameras')   //check camera validation

        cy.go(-1)  //got to back home
        cy.title().should('eq','Your Store')  //chek home page titie

        cy.go(1);  //go to camera page 
        cy.get("div[id='content'] h2").should('have.text','Cameras')  //check camera validation

        cy.reload();  //reload page


    })

   


  })