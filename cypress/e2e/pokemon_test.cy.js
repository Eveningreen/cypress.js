import * as pokedata from "..//locators/pokedata.json"

describe('Проверка авторизации', function () {

    it('e2e покупка аватара', function (){
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type(pokedata.user_login);
        cy.get('#password').type(pokedata.user_password);
        cy.get('.auth__button').click();
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/shop"]').click({force: true});
        cy.get('.available > button').first().click({force: true});
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('DENIS REDIS');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').should('be.visible',).and('have.css', 'color', 'rgb(85, 137, 241)');

    })

}) 