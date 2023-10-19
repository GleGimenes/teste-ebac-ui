
describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Athena Zipper Sweatshirt')
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5
        cy.get('[class="product-block grid"]')
            .contains('Argus All-Weather Tank').click()
            cy.get('.button-variable-item-M').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.stock').should('contain', 'Fora de estoque')

    });
});