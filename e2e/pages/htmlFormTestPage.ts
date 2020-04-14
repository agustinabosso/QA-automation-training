import {
  browser,
  by,
  element,
  ElementFinder,
  ExpectedConditions as EC,
} from "protractor";

export class HtmlFormTestPage {
  private pageTitle: ElementFinder;
  private usernameInput: ElementFinder;
  private passwordInput: ElementFinder;
  private commentTextArea: ElementFinder;
  private submitButton: ElementFinder;

  constructor() {
    this.usernameInput = element(by.name("username"));
    this.passwordInput = element(by.name("password"));
    this.commentTextArea = element(by.name("comments"));
    this.pageTitle = element(by.tagName("h1"));
    this.submitButton = element(by.buttonText("submit"));
  }

  /**
   * Go to html form test example page
   *
   * @return {Promise}
   */
  public go() {
    return browser.get("/styled/basic-html-form-test.html");
  }

  /**
   * Get page title
   */
  public async getPageTitleText() {
    await browser.wait(EC.visibilityOf(this.pageTitle));
    return this.pageTitle.getText();
  }

  public async enterUsername(text) {
    await this.usernameInput.clear();
    return this.usernameInput.sendKeys(text);
  }

  public async enterPassword(text) {
    await this.passwordInput.clear();
    return this.passwordInput.sendKeys(text);
  }

  public async enterComment(text) {
    await this.commentTextArea.clear();
    return this.commentTextArea.sendKeys(text);
  }

  public async clickOnSubmitButton() {
    await browser.wait(EC.elementToBeClickable(this.submitButton));
    return this.submitButton.click();
  }
}
