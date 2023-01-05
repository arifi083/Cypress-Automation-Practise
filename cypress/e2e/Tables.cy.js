describe('Handle tables',( ()=>{

    beforeEach('Login', ()=>{
      cy.visit("https://demo.opencart.com/admin/index.php")
      cy.get("#input-username").type("demo")
      cy.get("#input-password").type("demo")
      cy.get("button[type='submit']").click();

      //after login
      cy.get(".btn-close").click();
      //customer main menu
      cy.get("#menu-customer>a").click();
      cy.get("#menu-customer>ul>li:first-child").click();
  
      
    })

    it.skip('check number of rows and columns', () => {
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',10)
      cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length',7)
      
    })

    it.skip('check cell data from specific rows and columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(7)>td:nth-child(3)").contains("rs@yopmail.com");
       
    })

    it.skip('Read all rows and columns data in the first page', () => {
       cy.get("table[class='table table-bordered table-hover']>tbody>tr").each( ($row,index,$rows)=>{
          cy.wrap($row).within( ()=>{
             cy.get("td").each( ($col,index,$cols)=>{
              cy.log($col.text());
             })
          })
       })
     
    })

    

    it.only('pagination', () => {
      /*
        let totalPages;
        cy.get('.row > .text-end').then( (e)=>{
          let mytext = e.text();

          totalPages = mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
          cy.log("Total number of page in a table =====>" + totalPages);
        })

     */

      let totalPages = 5;
      for(let p=1;p<=totalPages;p++){
         if(totalPages>1){
            cy.log("Active page is ===" +p);
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(3000)
         cy.get("table[class='table table-bordered table-hover']>tbody>tr").each( ($row,index,$rows)=>{
             cy.wrap($row).within( ()=>{
                cy.get('td:nth-child(3)').then( (e)=>{
                   cy.log(e.text());
                })
             })
         })
       }
      }
       
    })
  
  }))