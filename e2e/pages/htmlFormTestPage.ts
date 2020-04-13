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
  private explanationText: ElementFinder;
  private usernameValue: ElementFinder;
  private passwordValue: ElementFinder;
  private commentValue: ElementFinder;

  constructor() {
    this.pageTitle = element(by.tagName("h1"));
    this.usernameInput = element(by.name("username"));
    this.passwordInput = element(by.name("password"));
    this.commentTextArea = element(by.name("comments"));
    this.submitButton = element(by.buttonText("submit"));
    this.explanationText = element(by.className("explanation"));
    this.usernameValue = element(by.id("_valueusername"));
    this.passwordValue = element(by.id("_valuepassword"));
    this.commentValue = element(by.id("_valuecomments"));
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

  /**
   * @param {String} text
   */
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

  public async getExplanationText() {
    await browser.wait(EC.visibilityOf(this.explanationText));
    return this.explanationText.getText();
  }

  public async getUsernameValue() {
    await browser.wait(EC.visibilityOf(this.usernameValue));
    return this.usernameValue.getText();
  }

  public async getPasswordValue() {
    await browser.wait(EC.visibilityOf(this.passwordValue));
    return this.passwordValue.getText();
  }

  public async getCommentValue() {
    await browser.wait(EC.visibilityOf(this.commentValue));
    return this.commentValue.getText();
  }
}
