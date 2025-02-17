describe('template spec', () => {
    it('Compra com sucesso', () => {
        //Login no site do Swaglabs
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        
        //verificar container de produtos

        cy.get('.inventory_list').should('be.visible')
        cy.get('#item_4_title_link > .inventory_item_name').contains('Sauce Labs Backpack')
        cy.get('#item_0_title_link > .inventory_item_name').contains('Sauce Labs Bike Light')
        cy.get('#item_1_title_link > .inventory_item_name').contains('Sauce Labs Bolt T-Shirt')
        
        //Selecionando produtos  

        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()

        //Acessando carrinho de compras

        cy.get('.shopping_cart_link').click()
        cy.get('.btn_action').click()

        //Preenchendo informações de entrega e finalizando compra

        cy.get('[data-test="firstName"]').type('Luiz')
        cy.get('[data-test="lastName"]').type('Henrique')
        cy.get('[data-test="postalCode"]').type('12345678')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
    })
})