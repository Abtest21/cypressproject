import globalVariables from "./globalVariables";

const golVar = globalVariables;

class registerPage {

  constructor() {
    this.registerLink = ('div:nth-child(3) div:nth-child(1) div:nth-child(2) p:nth-child(3) > a:nth-child(1)');
    this.firstNameField = ('[id="customer.firstName"]');
    this.lastNameField = ('[id="customer.lastName"]');
    this.addressField = ('[id="customer.address.street"]');
    this.cityField = ('[id="customer.address.city"]');
    this.stateField = ('[id="customer.address.state"]');
    this.zipcodeField = ('[id="customer.address.zipCode"]');
    this.phonenumberField = ('[id="customer.phoneNumber"]');
    this.SSNField = ('[id="customer.ssn"]');
    this.usernameField = ('[id="customer.username"]');
    this.passwordField = ('[id="customer.password"]')
    this.confirmField = ('[id="repeatedPassword"]');
    this.registerBtn = ('table.form2:nth-child(1) tbody:nth-child(1) tr:nth-child(13) td:nth-child(2) > input.button');
  }

  async registerNewUser(email, password, firstName, lastName, address, city, state, zipcode, phone, SSN) {
    cy.visit(golVar.baseUrl)
    cy.wait(500)
    cy.get(golVar.baseUrl).should('be.visible')
    cy.get(this.registerLink).click()
    cy.url().should('include','https://parabank.parasoft.com/parabank/register.htm')
    cy.get(this.firstNameField).type(firstName)
    cy.get(this.lastNameField).type(lastName)
    cy.get(this.addressField).type(address)
    cy.get(this.cityField).type(city)
    cy.get(this.stateField).type(state)
    cy.get(this.zipcodeField).type(zipcode)
    cy.get(this.phonenumberField).type(phone)
    cy.get(this.SSNField).type(SSN)
    cy.get(this.usernameField).type(email)
    cy.get(this.passwordField).type(password)
    cy.get(this.confirmField).type(password)
    cy.wait(500)
    cy.get(this.registerBtn).click()
  }

} export default new registerPage();
