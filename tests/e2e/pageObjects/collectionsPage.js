const { expect } = require('playwright/test');

class CollectionPage {
  constructor() {
    //locators
    this.collectionsBtnSelector = "//a[@href='/admin/collections']";
    this.tableSelector = "//table[@class='listing sticky']";
  }

  async navigateToCollections(){
    await page.click(this.collectionsBtnSelector)
  }

  async checkForTable(){
    await expect(page.locator(this.tableSelector)).toBeVisible()
  }

}
module.exports = { CollectionPage };
