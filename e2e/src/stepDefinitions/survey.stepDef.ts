import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { SurveyPage } from "../pageObjects/survey.po";
import { browser } from "protractor";
import { HomePage } from "../pageObjects/home.po";

let surveyPage: SurveyPage;
let homePage: HomePage;

Before(() => {
  surveyPage = new SurveyPage();
  homePage = new HomePage();
});

Given(/^User goes to survey page from home page$/, async () => {
  homePage.waitUntilFullyLoaded(5000, null, "home");
  await homePage.startBtn.click();
  browser.ignoreSynchronization = true;
});

Then(/^User should see the survey page title$/, async () => {
  surveyPage.waitUntilFullyLoaded(5000, null, "survey");
  expect(await surveyPage.title.getText()).to.equal(
    "Find out your stress score"
  );
});

Then(/^User should see progress bar$/, async () => {
  expect(await surveyPage.progressBar.statusBar.isPresent()).to.be.true;
  expect(await surveyPage.progressBar.finishBtn.getText()).to.equal("Finish");
});

Then(
  /^User should see the survey finish button as \"([^\"]*)\"$/,
  async btnStatus => {
    expect(await surveyPage.progressBar.finishBtn.isEnabled()).to.equal(
      btnStatus === "enabled"
    );
  }
);

Then(/^User should see questions$/, async () => {
  expect(await surveyPage.getQuestion(1).isPresent()).to.be.true;
  expect(await surveyPage.getQuestion(10).isPresent()).to.be.true;
});
