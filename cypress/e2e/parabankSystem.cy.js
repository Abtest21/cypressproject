import registerPage from "../fixtures/registerPage";
import globalVariables from "../fixtures/globalVariables";

const golVar = globalVariables;

describe.only('Parabanking Test cases', () => {
  it('Register a new user', () => {
    registerPage.registerNewUser(golVar.userName, golVar.password, golVar.firsName, golVar.lastName, golVar.address, golVar.city, golVar.state, golVar.zipCode, golVar.phoneNumber, golVar.SSN)
  })
})
