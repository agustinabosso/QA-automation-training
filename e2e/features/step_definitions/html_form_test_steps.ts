import { assert, expect } from "chai";
import {Given, Then, When} from "cucumber";
import { HtmlFormTestPage } from "../../pages/htmlFormTestPage";
import {browser} from "protractor";

const htmlFormTestPage: HtmlFormTestPage = new HtmlFormTestPage();

// GIVEN
Given(/^I am on the html form test page$/, async () => {
  await htmlFormTestPage.go();
});

When(/^I enter "([^"]*)" in "([^"]*)" field$/, async (text, option) => {
    switch (option) {
        case "username":
            await htmlFormTestPage.enterUsername(text);
            break;
        case "password":
            await htmlFormTestPage.enterPassword(text);
            break;
        case "textarea comment":
            await htmlFormTestPage.enterComment(text);
            break;
    }
});

When (/^I click on "([^"]*)" button$/, async (button) => {
    await htmlFormTestPage.clickOnSubmitButton();
    await browser.sleep(4000);
});

// THEN
Then(/^I validate the page title is "([^"]*)"$/, async (title) => {
   assert.strictEqual(await htmlFormTestPage.getPageTitleText(), title);
});

Then(/^"([^"]*)" message is displayed$/, async (expectedText) => {
    let text = await htmlFormTestPage.getExplanationText();
    //assert(text.includes(expectedText));
    expect(text).to.contains(expectedText);
});

Then(/^"([^"]*)" submitted value is "([^"]*)"$/, async (option, value) => {
    switch (option) {
        case "username":
            assert.strictEqual(await htmlFormTestPage.getUsernameValue(), value);
            break;
        case "password":
            assert.strictEqual(await htmlFormTestPage.getPasswordValue(), value);
            break;
        case "textarea comment":
            assert.strictEqual(await htmlFormTestPage.getCommentValue(), value);
            break;
    }
});