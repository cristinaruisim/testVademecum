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



it('Accedemos a Vademecum familia ejecutamos busqueda divorcio', function(){
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('[data-testid="toolbar-login-btn"]').click()
    // cy.get('#hs-eu-confirmation-button').click()
    // cy.get('.leadin-preview-wrapper').should('be.visible')
    // cy.get('.leadin-button').click()
    // cy.get('#input-firstname-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina', { force: true })
    // cy.get('#input-email-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina@hola.es', { force: true })
    
    // cy.get('#input-rea_de_inter_s-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Estudiante').should('have.value','Estudiante')
    // cy.get('#input-software-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Sudespacho').should('have.value', 'Sudespacho')
    cy.get('[data-testid="login-email-input"]').type('cristinaruisim@hotmail.com')
    cy.get('[data-testid="login-password-input"]').type('647083589Cris')
    cy.get('[data-testid="login-submit-btn"]').click()
    cy.get('[data-testid="menu_item_familia_tab"] > .q-tab__content > .q-tab__label').click()
    cy.get('.q-field__append > .q-btn > .q-btn__content > .q-icon').click()
    cy.get('.search-btn').click()
    cy.get('[data-testid="marginal-search-input"]').type('divorcio')

})

})