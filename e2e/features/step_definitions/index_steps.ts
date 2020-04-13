import { assert, expect } from "chai";
import { Given, When } from "cucumber";
import { IndexPage } from "../../pages/indexPage";

const indexPage: IndexPage = new IndexPage();

// GIVEN
Given(/^I am on the index page$/, async () => {
  await indexPage.go();
});

// WHEN
When(/^I click on "([^"]*)" option$/, async (option) => {
  if (option === "HTML form example") {
    await indexPage.clickOnHtmlFormExample();
  }
});
