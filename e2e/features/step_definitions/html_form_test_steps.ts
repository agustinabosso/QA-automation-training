import { assert, expect } from "chai";
import {Given, Then, When} from "cucumber";
import { HtmlFormTestPage } from "../../pages/htmlFormTestPage";
import {browser, ExpectedConditions as EC} from "protractor";

const htmlFormTestPage: HtmlFormTestPage = new HtmlFormTestPage();

// GIVEN
Given(/^I am on the html form test page$/, async () => {
  await htmlFormTestPage.go();
});

// WHEN
When(/^I enter "([^"]*)" in "([^"]*)" field$/, async (text, option) => {
    await browser.wait(EC.visibilityOf(htmlFormTestPage.formContainer));
    switch(option) {
        case "username" :
            await browser.wait(EC.visibilityOf(htmlFormTestPage.usernameInput));
            await htmlFormTestPage.enterUsername(text);
            break;
        case "password" :
            await browser.wait(EC.visibilityOf(htmlFormTestPage.passwordInput));
            await htmlFormTestPage.enterPassword(text);
            break;
        case "textarea comment" :
            await browser.wait(EC.visibilityOf(htmlFormTestPage.commentTextArea));
            await htmlFormTestPage.enterComment(text);
            break;
    }
});

When(/^I select checkbox "([^"]*)" in checkbox items section$/, async (option) => {
    await htmlFormTestPage.selectCheckboxByText(option);
});

When(/^I deselect checkbox "([^"]*)" in checkbox items section$/, async (option) => {
    await htmlFormTestPage.deselectCheckboxByText(option);
});

When(/^I select radio "([^"]*)" in radio items section$/, async (index) => {
    await htmlFormTestPage.selectRadioButton(index);
});

When(/^I click on "([^"]*)" button$/, async (buttonText) => {
    await htmlFormTestPage.clickOnSubmitButton();
});

When(/^I select "([^"]*)" from (dropdown|multiple selection)$/, async (option, type) => {
    await htmlFormTestPage.selectSelectionOption(option);
});

When(/^I deselect all options in multiple selects value$/, async () => {
    await htmlFormTestPage.deselectAllOptions();
});

// THEN
Then(/^I validate the page title is "([^"]*)"$/, async (title) => {
    assert.strictEqual(await htmlFormTestPage.getPageTitleText(), title);
    await browser.sleep(4000);
});