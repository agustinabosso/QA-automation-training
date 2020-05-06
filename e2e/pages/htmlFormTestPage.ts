import {
  browser,
  by,
  element, ElementArrayFinder,
  ElementFinder,
  ExpectedConditions as EC,
} from "protractor";

export class HtmlFormTestPage {
  public pageTitle: ElementFinder;
  public formContainer: ElementFinder;
  public usernameInput: ElementFinder;
  public passwordInput: ElementFinder;
  public commentTextArea: ElementFinder;
  public submitButton: ElementFinder;
  public checkboxes: ElementArrayFinder;

  constructor() {
    this.usernameInput = element(by.name("username"));
    this.passwordInput = element(by.name("password"));
    this.commentTextArea = element(by.name("comments"));
    this.formContainer = element(by.name("HTMLFormElements"));
    this.pageTitle = element(by.tagName("h1"));
    this.submitButton = element(by.buttonText("submit"));
    this.checkboxes = element.all(by.name("checkboxes[]"));
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
    await browser.wait(EC.visibilityOf(this.submitButton));
    return this.submitButton.click();
  }

  public async selectCheckboxByText(text) {
    const size = await this.checkboxes.count();
    console.log("Size ", size);
    for (let i=0; i<size; i++)  {
      const checkbox = this.checkboxes.get(i);
      // console.log("Checkbox ", checkbox);
      const checkboxText = await checkbox.getAttribute("value");
      console.log("Value ", checkboxText);
      const isCheckboxSelected = await checkbox.isSelected();
      console.log("IsSelected ", isCheckboxSelected);
      if (!(checkboxText.includes(text) && !isCheckboxSelected)) {
        await checkbox.click();
      }
    }
  }
}
