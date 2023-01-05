import 'cypress-file-upload';

describe('File Upload', () => {

    it.skip('Single File Upload', () => {
      
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('test.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it.skip('File upload -Rename', () => {
      
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'test.pdf',fileName:'myresume.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it.skip('File upload -Drag and Drop', () => {
      
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('test.pdf',{ subjectType: 'drag-n-drop' })
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("test.pdf")

    })

    it.skip('Multiple file upload', () => {
      
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['test.pdf','test1.pdf'])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    
    it.only('File upload -Shadow Dom', () => {
      
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test.pdf')
        cy.wait(5000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test.pdf')
    })


  })