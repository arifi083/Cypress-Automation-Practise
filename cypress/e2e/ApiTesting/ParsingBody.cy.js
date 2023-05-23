describe("Parsing Json Response",()=>{

    it("Parsing simple json response",()=>{

        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
        })
        .then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            expect(response.body[0].price).to.equal(109.95)
            expect(response.body[0].rating.rate).to.equal(3.9)

            expect(response.status).to.equal(200)
            expect(response.body[19].id).to.equal(20)
            expect(response.body[19].title).to.equal('DANVOUY Womens T Shirt Casual Cotton Short')
            expect(response.body[19].price).to.equal(12.99)
            expect(response.body[19].rating.rate).to.equal(3.6)
        })
    })
    

    it("Parsing complex json response",()=>{

        let totalPrice = 0;
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products',
            qs:{limit:3}

        })
        .then((response)=>{

            expect(response.status).to.equal(200)

            response.body.forEach(element=>{
                totalPrice = totalPrice + element.price;
            })
           // expect(totalPrice).to.equal(899.23)  // count 5 projects
            expect(totalPrice).to.equal(188.24)  // count 3 projects

        })
    })



})