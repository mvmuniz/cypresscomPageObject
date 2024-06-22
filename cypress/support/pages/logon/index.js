//ações de interação com a pagina
//ações
//acessar login
//preencher login

import { ELEMENTS } from './elements';

class Logon {
    acessarLogin() {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    }

    preencherLogin() {
        cy.get(ELEMENTS.emailInput).clear().type('admin@yourstore.com');
        cy.get(ELEMENTS.passwordInput).clear().type('admin');
    }

    confirmarLogin() {
        cy.get(ELEMENTS.loginButton).click();
    }
}

export default new Logon();