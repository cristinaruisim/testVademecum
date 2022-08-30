describe('Bateria casos de prueba Vademecumlegal', () => {

  before(function () {
    //Cargamos los valores del archivo example.json en un objeto de datos
    cy.fixture('example').then(function (datos) {
        this.datos = datos
       

    })
})
  it('passes', () => {
    cy.visit('https://www.vademecumlegal.es/')
  })

  it('Registrarnos por primera vez', function(){
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('.leadin-preview-wrapper').should('be.visible')
    cy.get('.leadin-button').click()
    cy.get('#input-firstname-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina', { force: true })
    cy.get('#input-email-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina@hola.es', { force: true })
    
    cy.get('#input-rea_de_inter_s-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Estudiante').should('have.value','Estudiante')
    cy.get('#input-software-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Sudespacho').should('have.value', 'Sudespacho')
    cy.get('.leadin-button').click()
    cy.get('#leadin-close-button').click()
    cy.get('[data-testid="toolbar-login-btn"]').click({ force: true })
    cy.get('[data-testid="go-to-register"]').click()
    cy.get('[data-testid="register-name-input"]').type('cristina')
    cy.get('[data-testid="register-phone-input"]').type('658236632')
    cy.get('[data-testid="register-email-input"]').type('cristinaruisim@hotmail.com')
    cy.get('[data-testid="register-form"] > .q-select > .q-field__inner > .q-field__control').click()
    cy.get('[data-testid="register-job-input"]').click()
    cy.get('.q-checkbox__svg').click()
    cy.get('[data-testid="next-btn"]').click()
    cy.get('[data-testid="register-verifyCode-input"]').type('xqhom?')
    cy.get('[data-testid="next-btn"] > .q-btn__content').click({ multiple: true }).click({  force: true } )   
    
                                                                                                                             
  })
 

  
})