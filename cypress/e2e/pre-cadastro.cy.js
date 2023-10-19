var faker = require('faker');
describe('Funcionalidade Pre Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pre cadastro com sucesso', () => {
        let emailFaker = faker.internet.emailFaker()
        let nameFaker = faker.name.firsName()
        let sobrenomeFaker = Faker.name.lastName()
        
        cy.get('.register > :nth-child(1)').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-Myccount-navigator-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click

        cy.get('woocommerce-messagem').should('contain', 'Detalhes da conta modificados com sucesso.') 
    });
    
});