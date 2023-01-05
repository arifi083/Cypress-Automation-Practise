describe('My Test suite', () => {

    it('Data Driven Test', () => {
      
        cy.fixture('orangehrm2').then( (data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach( (userData)=>{
                cy.get("input[placeholder='Username']").type(userData.username)
                cy.get("input[placeholder='Password']").type(userData.password)
                cy.get("button[type='submit']").click();

                if(userData.username =='Admin' && userData.password =='admin123'){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userData.expected)
                    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userData.expected)
                }
            })
        })
    })

   


  })