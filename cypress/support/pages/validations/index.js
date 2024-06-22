class Validation{
    validarLogin(){
        cy.url().should('include', '/admin'); // Verifica se a URL mudou para /admin, indicando que o login foi bem-sucedido
        cy.get('.content-header').contains('Dashboard').should('be.visible'); // Verifica se o elemento com classe content-header contém o texto "Dashboard" e está visível

    }


}
export default new Validation();