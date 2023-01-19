describe('Тестирование корзины заказов', function(){
    it('Позитивный кейс: оформление заказа',function(){
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('#cart-modal > .off-modal-layer').click();
        cy.reload();
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.intercept('POST', '/product/**').as('ajax-product');
        cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait('@ajax-product');
        cy.wait('@ajax-reload');
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Елена');
        cy.get('#billing_last_name').type('Прекрасная');
        cy.get('#billing_address_1').type('ул. Улукоморская, д.2');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Московская обл.');
        cy.get('#billing_postcode').type('798762');
        cy.get('#billing_phone').type('+7546441344');
        cy.get('#billing_email').type('elena@bella.ru');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
    })
})