describe('Тестирование формы логина и пароля', function () {
    it('Позитивный кейс: правильный логин + правильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })

     it('Позитивный кейс: восстановление пароля', function () {
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('truemail@false.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
     })  
     
     it('Негативный кейс: правильный логин + НЕправильный пароль', function () {
        cy.reload();
        cy.get('#mail').type('german@dovnikov.ru');
        cy.get('#pass').type('iLoveqastudio4');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: НЕправильный логин + правильный пароль', function () {
        cy.reload();
        cy.get('#mail').type('german@dovnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: невалидный логин + правильный пароль', function () {
        cy.reload();
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
     }) 

     it('Позитивный кейс: правильный логин, верхний регистр + правильный пароль', function () {
        cy.reload();
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
     }) 
 })



