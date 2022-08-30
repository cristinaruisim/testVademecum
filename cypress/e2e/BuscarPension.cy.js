describe('Bateria casos de prueba Vademecumlegal', () => {

})
  it('ingresamos', () => {
    cy.visit('https://www.vademecumlegal.es/')
  })

  it('Accedemos a Vademecum familia, ejecutamos busqueda Pension en practicos', function(){
    cy.get('#hs-eu-confirmation-button').click({ force: true })
    cy.get('[data-testid="toolbar-login-btn"]').click()
    cy.get('[data-testid="login-email-input"]').type('cristinaruisim@hotmail.com')
    cy.get('[data-testid="login-password-input"]').type('647083589Cris')
    cy.get('[data-testid="login-submit-btn"]').click()
    cy.get('[data-testid="menu_item_familia_tab"]').click()
    cy.get('#menu_child_familia_practicos_familia_list').click()
    cy.get(':nth-child(1) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control').type('pension')
    cy.get('#pensión_15').click()
    cy.get('#item-detail-tabs > .q-tabs__content > :nth-child(3)').click()
    cy.get('#item-detail-tabs > .q-tabs__content > .q-tab--active').click()
    cy.get(':nth-child(7) > .q-tab').click()
    cy.get(':nth-child(8) > .q-tab').click()
    cy.get(':nth-child(9) > .q-tab').click()
    cy.get(':nth-child(10) > .q-tab').click()







   
    
   
  
  })