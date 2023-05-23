describe("Http Request",()=>{
    
    it("GET Call",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);
    })



    it("POST Call",()=>{
        cy.request({

            method:'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title:"test post",
                body:"this is test title and body",
                userId:1
            }
        }) //request
        .its('status')
        .should('equal',201);
    })

  
    it("PUT Call",()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                
                    title:"test post by arif",
                    body:"this is test title and body. it is reading by ruhi",
                    userId:1,
                    id:1
               }
 
        }) //request
        .its('status')
        .should('equal',200);
    })

    it("DELETE Call",()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal',200)
    })


})