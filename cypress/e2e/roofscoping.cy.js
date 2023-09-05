import loginPage from "../fixtures/loginPage";
import logoutPage from "../fixtures/logoutPage";
import orderScope from "../fixtures/orderScope";

describe('Roofscoping Test cases', () => {
  it('login and logout with valid credential', () => {
    loginPage.loginInApp('abdullahrashidrao@gmail.com', 'qa123456')
  })

  it('place order a new roofscope', () => {
    orderScope.orderingRoofscope('ss fd', 'r', '2')
  })

  it('login and logout with valid credentials', () => {
    logoutPage.logoutFromApp()
  })

})
