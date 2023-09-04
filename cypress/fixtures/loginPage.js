import GlobalVariables from "./GlobalVariables";

const golVar = GlobalVariables;
class loginPage {

  constructor() {
    this.emailField = ('#customer-login > div > div > div.col.xs-12.lg-6.top.text-center.login-col.account-box > div > form > div:nth-child(1) > input[type=text]');
    this.passwordField = ('#customer-login > div > div > div.col.xs-12.lg-6.top.text-center.login-col.account-box > div > form > div:nth-child(2) > input[type=password]');
    this.loginBtn = ('#customer-login > div > div > div.col.xs-12.lg-6.top.text-center.login-col.account-box > div > form > div.form-item.submit.buttons > button');

  }

  loginInApp(email, password) {
    cy.visit()
    cy.get(this.emailField).type(email)
    cy.wait(1000)
    cy.get(this.passwordField).type(password)
    cy.wait(1000)
    cy.get(this.loginBtn).click()
    cy.url().should('eq', 'https://roofscope.com/');
    cy.wait(1000)
  }

} export default new loginPage();
