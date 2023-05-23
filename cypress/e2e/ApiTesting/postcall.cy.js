describe("Api Testing",()=>{
    
    it.skip("Approach 1- Hard coded json object",()=>{

        const requestBody ={
            tourist_name:"arif",
            tourist_email:"arif@gmail.com",
            tourist_location:"dhaka"
        }

        cy.request({
            method:'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestBody
             
        }) 
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("arif")
            expect(response.body.tourist_email).to.eq("arif@gmail.com")
            expect(response.body.tourist_location).to.eq("dhaka")

        })

    })




    it.skip("Approach 2- Dynamically generate json object",()=>{

        const requestBody ={
            tourist_name:Math.random().toString(5).substring(2),
            tourist_email:Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location:"dhaka"
        }

        cy.request({
            method:'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestBody
             
        }) 
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

        })

    })




    it.only("Approach 3-Using fixute",()=>{

        cy.fixture('tourist').then( (data)=>{
            const requestBody = data;
         
            cy.request({
                method:'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestBody
                 
            }) 
            .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)


                expect(response.body).has.property('tourist_email',requestBody.tourist_email)
                expect(response.body).to.have.property('tourist_email',requestBody.tourist_email)
    
            }) // request



        }) // fixture

    }) // it block


}) // describe block