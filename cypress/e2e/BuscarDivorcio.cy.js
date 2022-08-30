

describe('Bateria casos de prueba Vademecumlegal', () => {

  })
    it('ingresamos', () => {
      cy.visit('https://www.vademecumlegal.es/')
    })



 it('Accedemos a Vademecum familia ejecutamos busqueda divorcio', function(){
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('[data-testid="toolbar-login-btn"]').click()
    cy.get('#hs-eu-confirmation-button').click({ force: true})
    cy.get('[data-testid="login-email-input"]').type('cristinaruisim@hotmail.com')
    cy.get('[data-testid="login-password-input"]').type('647083589Cris')
    cy.get('[data-testid="login-submit-btn"]').click()
    cy.get('[data-testid="menu_item_familia_tab"] > .q-tab__content > .q-tab__label').click()
    cy.get('.search-btn > .q-icon').click({ force: true })
    cy.get('[data-testid="marginal-search-input"]').type('divorcio')
    cy.get(':nth-child(5) > [style=""] > :nth-child(1) > :nth-child(1) > .q-tree__node-collapsible > .q-tree__children > :nth-child(3) > .q-tree__node-header > .q-tree__node-header-content > a > [data-v-1ef53eab=""]').click()
    cy.get('#item-detail-tabs > .q-tabs__content > .q-tab--active').click()
    cy.get('#item-detail-tabs > .q-tabs__content > :nth-child(5)').click()
    cy.get(':nth-child(7) > .q-tab').click()
    cy.get(':nth-child(8) > .q-tab').click()
   

})







