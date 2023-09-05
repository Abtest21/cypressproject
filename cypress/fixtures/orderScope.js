import globalVariables from "./globalVariables";
class placeOrder {

  constructor() {
    this.mapField = ('body.polyscope.scope.webkit.scroll-top:nth-child(2) main.site-main:nth-child(2) section.home-video.content header.row.top-row.show:nth-child(1) div.wrap div.search-box:nth-child(3) div.search-input > input.address-input.pac-target-input');
    this.confirmAddressBtn = ('body.polyscope.scope.webkit:nth-child(2) main.site-main:nth-child(2) section.home-video.content div.scope-order-row.row.section-style-a.show:nth-child(3) div.wrap div.row div.order-tab.order-map.order-media.show:nth-child(1) div.order-box div.map-box div.gm-style div.gm-style-iw-a div.gm-style-iw-t div.gm-style-iw.gm-style-iw-c div.gm-style-iw-d div:nth-child(1) div.scope-info-window div.buttons:nth-child(3) > a.add-scope.button');
    this.propertyTypeDropDown = ('[name="property_type"]');
    this.selectSmall = ('body.polyscope.scope.webkit:nth-child(2) main.site-main:nth-child(2) section.home-video.content div.scope-order-row.row.section-style-a.show:nth-child(3) div.wrap div.row div.order-tab.order-options.show:nth-child(4) div.order-options-form:nth-child(4) div.form-body:nth-child(10) div.order-wizard-fields.activated div.col-property-type.col.xs-12.lg-4.xs-padding-bottom.top.left div.property-size:nth-child(3) div.property-size-input.builder-radio label.radio:nth-child(1) > div.label:nth-child(2)');
    this.buildingField = ('[data-placeholder-comm="Enter total # of buildings on property*"]');
    this.addToCartBtn = (`body.polyscope.scope.webkit:nth-child(2) main.site-main:nth-child(2) section.home-video.content div.scope-order-row.row.section-style-a.show:nth-child(3) div.wrap div.row div.order-tab.order-options.show:nth-child(4) div.buttons.row.right:nth-child(5) div.col.xs-6.right.button-add > a.button.add-to-cart`);
  }

  orderingRoofscope(address, type, noBuilding) {
    const selectPropertyType = (`[value="${type}"]`);
    cy.visit('https://roofscope.com/')
    cy.get(this.mapField).type(`${address}{enter}`)
    cy.wait(500)
    cy.get(this.confirmAddressBtn).click()
    cy.wait(500)
    cy.get(this.propertyTypeDropDown).click()
    cy.get(selectPropertyType).click()
    cy.wait(500)
    cy.get(this.selectSmall).click()
    cy.get(this.buildingField).type(noBuilding)
    cy.wait(500)
    cy.get(this.addToCartBtn).click()
  }
} export default new placeOrder();
