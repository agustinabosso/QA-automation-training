import { assert, expect } from "chai";
import {Given, Then, When} from "cucumber";
import { FormProcessorPage } from "../../pages/formProcessorPage";
import {browser} from "protractor";

const formProcessorPage: FormProcessorPage = new FormProcessorPage();

// THEN
Then(/^"([^"]*)" message is displayed$/, async (expectedText) => {
    let text = await formProcessorPage.getExplanationText();
    //assert(text.includes(expectedText));
    expect(text).to.contains(expectedText);
});

Then(/^"([^"]*)" submitted value is "([^"]*)"$/, async (option, value) => {
    switch (option) {
        case "username" :
            assert.strictEqual(await formProcessorPage.getUsernameText(), value);
            break;
    }
});
