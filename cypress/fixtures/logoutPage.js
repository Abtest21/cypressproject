import loginPage from "./loginPage";

class logoutPage {

    constructor() {
      this.homeIcon = ('#container > header > div.wrap.fullscreen > div.nav.nav-account.col.xs-4.sm-3.lg-4.right > div.link-menu.account-home.arrow-top.align-right.popup > div.parent.on-click > i');
      this.logoutBtn = ('#container > header > div.wrap.fullscreen > div.nav.nav-account.col.xs-4.sm-3.lg-4.right > div.link-menu.account-home.arrow-top.align-right.popup.amp-toggle-content.is-active > div.children > div.link-menu.menu-tab.vertical.link-logout > a');
    }

    logoutFromApp() {
      cy.wait(500)
      cy.visit('https://roofscope.com/customer/logout')
    }

  } export default new logoutPage();
