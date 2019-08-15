import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { LoginPage } from "../pageObjects/login.po";
import { HomePage } from "../pageObjects/home.po";
import { browser } from "protractor";

let loginPage: LoginPage;
let homePage: HomePage;

Before(() => {
  loginPage = new LoginPage();
  homePage = new HomePage();
});

Given(/^User logs in$/, async () => {
  await loginPage.navigateTo("/");
  loginPage.enterUsername("abhinav82ify");
  loginPage.enterPassword("password");
  await loginPage.loginBtn.click();
  browser.ignoreSynchronization = true;
});

Then(
  /^User should see the home page title, content and start button$/,
  async () => {
    homePage.waitUntilFullyLoaded(5000, null, "home");
    expect(await homePage.heading.isPresent()).to.be.true;
    expect(await homePage.content.isPresent()).to.be.true;
    expect(await homePage.startBtn.isPresent()).to.be.true;
    expect(await homePage.appHeader.logo.isPresent()).to.be.true;
  }
);

Then(/^User should see the logout button$/, async () => {
    expect(await homePage.appHeader.logout.getText()).to.equal("Logout")
})
