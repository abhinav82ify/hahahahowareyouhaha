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

Then(/^User should see the field for username and password$/, () => {
  expect(page.username).to.be.ok;
  expect(page.password).to.be.ok;
});

Then(/^User should see the login button$/, () => {
  expect(page.loginBtn).to.be.ok;
});

When(/^User enters username \"([^\"]*)\"$/, async (username) => {
  await page.enterUsername(username);
});

When(/^User enters password \"([^\"]*)\"$/, async (password) => {
  await page.enterPassword(password);
});

When(/^User clicks on login button$/, async () => {
  // page.setUsers();
  // browser.pause();
  await page.loginBtn.click();
});

Then(/^User should see the error message$/, () => {
  expect(page.errorMsg).to.be.ok;
});

Then(/^User should not see the error message$/, () => {
  expect(page.errorMsg).not.to.be.ok;
});

Then(/^User should be taken to \"([^\"]*)\" page$/, async (pageName) => {
  page.waitUntilFullyLoaded(5000, null, "home");
  let url = PageUrl[pageName];
  let currentUrl = await page.currentUrl();
  expect(currentUrl.endsWith(url)).to.be.true;
});