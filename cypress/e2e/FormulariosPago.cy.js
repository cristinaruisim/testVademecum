describe('Bateria casos de prueba Vademecumlegal', () => {

})
  it('ingresamos', () => {
    cy.visit('https://www.vademecumlegal.es/')
  })


  it('Accedemos a formularios,hasta pasarela de pago', function(){
    cy.get('#hs-eu-confirmation-button').click({ force: true })
    cy.get('[data-testid="toolbar-login-btn"]').click()
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
  