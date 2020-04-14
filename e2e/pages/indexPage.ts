import {
  browser,
  by,
  element,
  ElementFinder,
  ExpectedConditions as EC,
} from "protractor";

export class IndexPage {
  public htmlFormExample: ElementFinder;

  constructor() {
    this.htmlFormExample = element(by.id("htmlformtest"));
  }

  /**
   * Go to index page
   *
   * @return {Promise}
   */
  public go() {
    return browser.get("/styled/index.html");
  }

  /**
   * Click on HTML form example option
   */
  public async clickOnHtmlFormExample() {
    await browser.wait(EC.visibilityOf(this.htmlFormExample));
    await this.htmlFormExample.click();
  }
}
