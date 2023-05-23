// install xml2js library
// npm install xml2js


const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray:false});
let petId= null;

describe("xml parsing",()=>{

    const xmlpayLoad ="<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>Dog</name> 	</Category> 	<name>baby</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>";

    before("creating pet id",()=>{
        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:xmlpayLoad,
            headers:{
                'Content-Type':"application/xml",
                'accept':"application/xml"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                petId = result.Pet.id;

            }) // then

        }) //before

    }) // it


    it("Fetching Pet data-parsing Xml Response",()=>{
        cy.request({
            method:'GET',
            url:"https://petstore.swagger.io/v2/pet/"+petId,
            body:xmlpayLoad,
            headers:{
                'accept':"application/xml"
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
               expect(result.Pet.id).to.equal(petId);
               expect(result.Pet.name).to.equal("baby")

            }) // then

        }) //before

    }) // it


}) // decribe