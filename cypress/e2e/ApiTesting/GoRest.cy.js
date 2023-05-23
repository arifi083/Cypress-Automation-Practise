describe("Go Rest Api Chaining",()=>{
    const auth_token ="Bearer 9dc88dac4d818ab1b515bb6f3f6cd28c5ee0e0dffa16546c41918d4b6db4bba5";

    it("Getting all the post",()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            body:{
                name:'Arif islam',
                gender:'male',
                email: Math.random().toString(5).substring(2)+"gmail.com",
                status:'active'
            },
            headers:{
                Authorization: auth_token
            }
           
        }) // post cy request
        .then((response)=>{
            expect(response.status).to.equal(201);
            const userId = response.body.id;

            //update user 
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    name:'atif'
                },
                headers:{
                    Authorization: auth_token
                }
            })
            .then((response)=>{
                expect(response.status).to.equal(200);
                expect(response.body.name).to.equal('atif');

                // delete user
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v2/users/${userId}`,
                    headers:{
                        Authorization: auth_token
                    }

                })
                .then((response)=>{
                    expect(response.status).to.equal(204);

                }) // delete response

            }) // put response

        }) // post response

        
        
    }) //it block


   



}) //describe block