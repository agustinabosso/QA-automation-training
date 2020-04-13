import { assert, expect } from "chai";
import { Given, Then } from "cucumber";
import { HtmlFormTestPage } from "../../pages/htmlFormTestPage";

const htmlFormTestPage: HtmlFormTestPage = new HtmlFormTestPage();

// GIVEN
Given(/^I am on the html form test page$/, async () => {
  await htmlFormTestPage.go();
});

// THEN
Then(/^I validate the page title is "([^"]*)"$/, async (title) => {
   assert.strictEqual(await htmlFormTestPage.getPageTitleText(), title);
});
