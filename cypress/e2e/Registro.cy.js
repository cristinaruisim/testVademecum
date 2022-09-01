describe('Bateria casos de prueba Vademecumlegal', () => {

  before(function () {
    
    cy.fixture('datosUsuario').then(function (datos) {
        this.datos = datos
       

    })
})
  before('ingresamos', () => {
    cy.visit('https://www.vademecumlegal.es/')
  })

  it('Registrarnos por primera vez', function(){
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('.q-ml-sm').click()
    cy.get('[data-testid="toolbar-login-btn"]').click({ force: true })
    cy.get('[data-testid="go-to-register"]').click()
    cy.get('[data-testid="register-name-input"]').type(this.datos.nombre)
    cy.get('[data-testid="register-phone-input"]').type(this.datos.numeroTelefono)
    cy.get('[data-testid="register-email-input"]').type(this.datos.email)
    cy.get('[data-testid="register-form"] > .q-select > .q-field__inner > .q-field__control').click()
    cy.get('[data-testid="register-job-input"]').click()
    cy.get('.q-checkbox__svg').click()
    cy.get('[data-testid="next-btn"]').click()
    cy.get('[data-testid="register-verifyCode-input"]').type(this.datos.clave)
    cy.get('[data-testid="next-btn"] > .q-btn__content').click({ multiple: true }).click({  force: true } )   
    
                                                                                                                             
  })
 

  
})