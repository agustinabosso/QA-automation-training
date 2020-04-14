import { assert, expect } from "chai";
import {Given, Then, When} from "cucumber";
import { HtmlFormTestPage } from "../../pages/htmlFormTestPage";
import {browser} from "protractor";

const htmlFormTestPage: HtmlFormTestPage = new HtmlFormTestPage();

// GIVEN
Given(/^I am on the html form test page$/, async () => {
  await htmlFormTestPage.go();
});

// WHEN
When(/^I enter "([^"]*)" in "([^"]*)" field$/, async (text, option) => {
    switch(option) {
        case "username" :
            await htmlFormTestPage.enterUsername(text);
            break;
        case "password" :
            await htmlFormTestPage.enterPassword(text);
            break;
        case "textarea comment" :
            await htmlFormTestPage.enterComment(text);
            break;
    }
});

When(/^I click on "([^"]*)" button$/, async (buttonText) => {
    await htmlFormTestPage.clickOnSubmitButton();
});

// THEN
Then(/^I validate the page title is "([^"]*)"$/, async (title) => {
    assert.strictEqual(await htmlFormTestPage.getPageTitleText(), title);
});