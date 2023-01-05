describe('Kushan First Test', function(){
    it('Guru 99 Login',function(){
        cy.visit('http://demo.guru99.com/v4/')
        cy.xpath("//input[@name='uid']").type('mngr332873')
        cy.xpath("//input[@name='password']").type('umEtyvy')
        cy.xpath("//input[@name='btnLogin']").click()
        //cy.xpath("//tr[@class='heading3']/td").should('have.text', 'Manger Id : mngr332873')
    })
})