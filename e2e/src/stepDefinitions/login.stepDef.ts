import { Before, Given, Then, When } from "cucumber";
import { expect } from "chai";

import { LoginPage } from "../pageObjects/login.po";
import { PageUrl } from "../utils/pageUrls";
import { browser } from 'protractor';

let page: LoginPage;

Before(() => {
  page = new LoginPage();
});

Given(/^User is on the \"([^\"]*)\" page$/, async pageName => {
  let url = PageUrl[pageName];
  await page.navigateTo(url);
});

When(/^User do nothing$/, () => {});

Then(/^User should see the login page title$/, async () => {
  expect(await page.getTitleText()).to.equal("Login");
});

Then(/^User should see the field for username and password$/, async () => {
  expect(await page.username.isPresent()).to.be.true;
  expect(await page.password.isPresent()).to.be.true;
});

Then(/^User should see the login button$/, async () => {
  expect(await page.loginBtn.isPresent()).to.be.true;
});

Then(/^User should see the app header$/, async () => {
  expect(await page.appHeader.logo.isPresent()).to.be.true;
  expect(await page.appHeader.navbox.isPresent()).to.be.true;
});

When(/^User enters username \"([^\"]*)\"$/, async (username) => {
  await page.enterUsername(username);
});

When(/^User enters password \"([^\"]*)\"$/, async (password) => {
  await page.enterPassword(password);
});

When(/^User clicks on login button$/, async () => {
  await page.loginBtn.click();
});

Then(/^User should see the error message$/, async () => {
  //app takes time to render the element back on the DOM. Hence, browser is made to sleep for 1000ms for error mesage to render properly.
  browser.sleep(1000);
  expect(await page.errorMsg.isPresent()).to.be.true;
});

Then(/^User should not see the error message$/, async () => {
  expect(await page.errorMsg.isPresent()).to.be.false;
});

Then(/^User should be taken to \"([^\"]*)\" page$/, async (pageName) => {
  page.waitUntilFullyLoaded(5000, null, "home");
  let url = PageUrl[pageName];
  let currentUrl = await page.currentUrl();
  expect(currentUrl.endsWith(url)).to.be.true;
});