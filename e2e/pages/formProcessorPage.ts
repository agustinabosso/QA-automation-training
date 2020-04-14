import {
  browser,
  by,
  element,
  ElementFinder,
  ExpectedConditions as EC,
} from "protractor";

export class FormProcessorPage {
  private explanationText: ElementFinder;
  private usernameValue: ElementFinder;

  constructor() {
    this.explanationText = element(by.className("explanation"));
    this.usernameValue = element(by.id("_valueusername"));
  }

  /**
   * Go to index page
   *
   * @return {Promise}
   */
  public go() {
    return browser.get("/styled/the_form_processor.php");
  }

  public async getExplanationText() {
    await browser.wait(EC.visibilityOf(this.explanationText));
    return this.explanationText.getText();
  }

  public async getUsernameText() {
    await browser.wait(EC.visibilityOf(this.usernameValue));
    return this.usernameValue.getText();
  }
}
