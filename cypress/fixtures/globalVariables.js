
import faker from 'faker';
const emailValue = faker.internet.email();
const passwordValue = faker.internet.password();

class golbalVariables {
  constructor() {
    this.baseUrl = 'https://parabank.parasoft.com/';
    this.companyLogo = ('.caption');
    this.firsName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.address = 'tester 3434 23'
    this.city = 'Melon';
    this.state = 'Tutu';
    this.zipCode = '33443';
    this.phoneNumber = '501-039-841';
    this.SSN = '332';
    this.userName = emailValue;
    this.password = passwordValue;
  }
} export default new golbalVariables();
