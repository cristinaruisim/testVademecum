describe('Bateria casos de prueba Vademecumlegal', () => {

  before(function () {
   
    cy.fixture('datosUsuario').then(function (datos) {
       this.datos = datos
      

    })

})
  before('ingresamos', () => {
    cy.visit('https://www.vademecumlegal.es/')
  })


it('Accedemos a Vademecum familia, ejecutamos busqueda Curatela', function(){
    cy.get('#hs-eu-confirmation-button').click({ force: true })
    cy.get('[data-testid="toolbar-login-btn"]').click()
    cy.get('[data-testid="login-email-input"]').type(this.datos.email)
    cy.get('[data-testid="login-password-input"]').type(this.datos.password)
    cy.get('[data-testid="login-submit-btn"]').click()
    cy.get('[data-testid="menu_item_familia_tab"] > .q-tab__content > .q-tab__label').click()
    cy.get('.search-btn > .q-icon').click({ force: true })
    cy.get('#menu_child_familia_esquemas_familia_list > .q-tab__content > .q-tab__label').click()
    cy.get('[data-testid="article-search-input"]').type('curatela')
    cy.get('#Curatela_0').click()
    
})
  
  })