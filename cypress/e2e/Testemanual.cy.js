describe('template spec', () => {
  it('Login invalido (Nome de usuario invalido)', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })
  it('Login invalido (Senha invalida)', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_')
    cy.get('#login-button').click()
  })
  it('Login invalido (Usuario e Senha invalida)', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_')
    cy.get('[data-test="password"]').type('secret_')
    cy.get('#login-button').click()
  })
})