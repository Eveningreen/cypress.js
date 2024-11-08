import * as new_main_page from "../locators/new_main_page.json"
import * as main_data from "../locators/main_data.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function (){
        cy.visit('https://login.qa.studio/');
    })

    afterEach('Конец теста', function (){
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Позитивный кейс', function (){
        cy.get(new_main_page.email).type(main_data.login);
        cy.get(new_main_page.password).type(main_data.pass);
        cy.get(new_main_page.login_button).click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

    it('Восстановление пароля', function (){
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('dannykar91@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');

    })
    
    it('Вход с неправильным паролем', function (){
        cy.get(new_main_page.email).type(main_data.login);
        cy.get(new_main_page.password).type('dagtryw424e');
        cy.get(new_main_page.login_button).click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })

    it('Вход с неправильным логином', function (){
        cy.get(new_main_page.email).type('dannykar91@gmail.com');
        cy.get(new_main_page.password).type(main_data.pass);
        cy.get(new_main_page.login_button).click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })

    it('Вход с невалидным логином', function (){
        cy.get(new_main_page.email).type('germandolnikov.ru');
        cy.get(new_main_page.password).type(main_data.pass);
        cy.get(new_main_page.login_button).click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })

    it('Приведение к строчным буквам', function (){
        cy.get(new_main_page.email).type(' GerMan@Dolnikov.ru');
        cy.get(new_main_page.password).type(main_data.pass);
        cy.get(new_main_page.login_button).click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

}) 