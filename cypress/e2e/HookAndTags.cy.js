describe('My Hooks and Tag Suite', () => {

    before( ()=>{
        cy.log("************  Launch app  *****************");
    })

    beforeEach( ()=>{
        cy.log("************  Login *****************");
    })

    afterEach( ()=>{
        cy.log("************  Logout *****************");
    })

    after( ()=>{
        cy.log("************  Close App *****************");
    })




    it('Search', () => {
      
       cy.log("************  Search  *****************");
    })

    it('Advance Search', () => {
      
        cy.log("************  Advance Search  *****************");
    })

    
    it('Listing Product', () => {
      
        cy.log("************ Listing Product  *****************");
    })


  })