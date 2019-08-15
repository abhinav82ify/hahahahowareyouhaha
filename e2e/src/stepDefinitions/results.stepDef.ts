import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { ResultsPage } from '../pageObjects/results.po';

let resultsPage: ResultsPage;

Before(() => {
    resultsPage = new ResultsPage();
});

Then(/^User should see the results page title$/, async () => {
    expect(await resultsPage.heading.getText()).to.equal("Result")
});

Then(/^User should see the score bar$/, async () => {
    expect(await resultsPage.scoreBar.isPresent()).to.be.true;
})
