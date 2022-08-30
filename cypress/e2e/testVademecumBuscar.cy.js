

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



// it('Accedemos a Vademecum familia ejecutamos busqueda divorcio', function(){
//     cy.get('#hs-eu-confirmation-button').click()
//     cy.get('[data-testid="toolbar-login-btn"]').click()
//     // cy.get('#hs-eu-confirmation-button').click()
//     // cy.get('.leadin-preview-wrapper').should('be.visible')
//     // cy.get('.leadin-button').click()
//     // cy.get('#input-firstname-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina', { force: true })
//     // cy.get('#input-email-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina@hola.es', { force: true })
    
//     // cy.get('#input-rea_de_inter_s-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Estudiante').should('have.value','Estudiante')
//     // cy.get('#input-software-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Sudespacho').should('have.value', 'Sudespacho')
//     cy.get('[data-testid="login-email-input"]').type('cristinaruisim@hotmail.com')
//     cy.get('[data-testid="login-password-input"]').type('647083589Cris')
//     cy.get('[data-testid="login-submit-btn"]').click()
//     cy.get('[data-testid="menu_item_familia_tab"] > .q-tab__content > .q-tab__label').click()
//     cy.get('.search-btn > .q-icon').click({ force: true })
//     cy.get('[data-testid="marginal-search-input"]').type('divorcio')
//     cy.get(':nth-child(5) > [style=""] > :nth-child(1) > :nth-child(1) > .q-tree__node-collapsible > .q-tree__children > :nth-child(3) > .q-tree__node-header > .q-tree__node-header-content > a > [data-v-1ef53eab=""]').click()
//     cy.get('#item-detail-tabs > .q-tabs__content > .q-tab--active').click()
//     cy.get('#item-detail-tabs > .q-tabs__content > :nth-child(5)').click()
//     cy.get(':nth-child(7) > .q-tab').click()
//     cy.get(':nth-child(8) > .q-tab').click()
   

// })

// it('Accedemos a Vademecum familia ejecutamos busqueda Curatela', function(){
//   cy.get('#hs-eu-confirmation-button').click({ force: true })
//   cy.get('[data-testid="toolbar-login-btn"]').click()
//   // cy.get('#hs-eu-confirmation-button').click()
//   // cy.get('.leadin-preview-wrapper').should('be.visible')
//   // cy.get('.leadin-button').click()
//   // cy.get('#input-firstname-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina', { force: true })
//   // cy.get('#input-email-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina@hola.es', { force: true })
  
//   // cy.get('#input-rea_de_inter_s-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Estudiante').should('have.value','Estudiante')
//   // cy.get('#input-software-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Sudespacho').should('have.value', 'Sudespacho')
//   cy.get('[data-testid="login-email-input"]').type('cristinaruisim@hotmail.com')
//   cy.get('[data-testid="login-password-input"]').type('647083589Cris')
//   cy.get('[data-testid="login-submit-btn"]').click()
//   cy.get('[data-testid="menu_item_familia_tab"] > .q-tab__content > .q-tab__label').click()
//   cy.get('.search-btn > .q-icon').click({ force: true })
//   cy.get('#menu_child_familia_esquemas_familia_list > .q-tab__content > .q-tab__label').click()
//   cy.get('[data-testid="article-search-input"]').type('curatela')
//   cy.get('#Curatela_0').click()
  
 

// })

// it('Accedemos a Vademecum familia ejecutamos buscamos Curatela', function(){
//   cy.get('#hs-eu-confirmation-button').click({ force: true })
//   cy.get('[data-testid="toolbar-login-btn"]').click()
//   // cy.get('#hs-eu-confirmation-button').click()
//   // cy.get('.leadin-preview-wrapper').should('be.visible')
//   // cy.get('.leadin-button').click()
//   // cy.get('#input-firstname-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina', { force: true })
//   // cy.get('#input-email-d2af267c-88f7-4616-8c8d-f81dce94841d').type('cristina@hola.es', { force: true })
  
//   // cy.get('#input-rea_de_inter_s-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Estudiante').should('have.value','Estudiante')
//   // cy.get('#input-software-d2af267c-88f7-4616-8c8d-f81dce94841d').select('Sudespacho').should('have.value', 'Sudespacho')
//   cy.get('[data-testid="login-email-input"]').type('cristinaruisim@hotmail.com')
//   cy.get('[data-testid="login-password-input"]').type('647083589Cris')
//   cy.get('[data-testid="login-submit-btn"]').click()
//   cy.get('[data-testid="menu_item_familia_tab"] > .q-tab__content > .q-tab__label').click()
//   cy.get('#menu_child_familia_practicos_familia_list > .q-tab__content > .q-tab__label').click()
//   cy.get(':nth-child(1) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('pension')
//   cy.get('#pensión_15').click()
//   cy.get('#item-detail-tabs > .q-tabs__content > :nth-child(3) > .q-tab__content').click()
//   cy.get('#item-detail-tabs > .q-tabs__content > :nth-child(5)').click()
//   cy.get(':nth-child(7) > .q-tab').click()
//   cy.get(':nth-child(8) > .q-tab').click()
//   cy.get(':nth-child(9) > .q-tab').click()
//   cy.get(':nth-child(10) > .q-tab').click()
  
// })
it('Accedemos a formularios', function(){
  cy.get('#hs-eu-confirmation-button').click({ force: true })
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
  cy.get('#menu_child_familia_practicos_familia_list > .q-tab__content > .q-tab__label').click()
  cy.get('#menu_child_familia_formularios_familia_list').click()
  cy.get(':nth-child(1) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('custodia compartida')
  cy.get('#custodia_77').click()
  cy.get('#paywall-subscribe-btn').click()
  cy.get('.col-6 > .q-card > .q-card__section > .q-gutter-md > #buy_now').click()
  cy.get(':nth-child(4) > [data-testid="cart-remove-item-button-row-0"] > .q-btn__content').click()
  cy.get(':nth-child(1) > .q-btn__content > .block').click()
  cy.get(':nth-child(4) > [data-testid="cart-remove-item-button-row-1"] > .q-btn__content').click()
  cy.get('[data-autofocus="true"] > .q-btn__content > .block').click()
  cy.get('[data-testid="process-cart-btn-secondary"]').click()
  cy.get('[data-testid="confirm-cart-btn-secondary"]').click()
  cy.get('.bg-positive').click()
  




 





  
  
})





})