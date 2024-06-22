//ações de interação com a pagina
//ações
//acessar login
//preencher login
class logon{
acessarLogin(){
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
} 
preencherLogin(){
    cy.get('#Email').clear().type('admin@yourstore.com');
    cy.get('#Password').clear().type('admin');
}
confirmarLogin(){
    cy.get('.login-button').click();
}
}
export default new logon();