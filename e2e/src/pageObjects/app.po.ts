import { browser, element, by, ExpectedConditions } from "protractor";

export class AppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  currentUrl() {
    return browser.getCurrentUrl();
  }

  setUsers() {
    browser.executeScript(
      `localStorage.setItem("appUsers", "[{\'name\':\'Abhinav Sharma\',\'id\':30,\'username\':\'abhinav82ify\',\'password\':\'password\'}]")`
    );
  }

  isFullyLoaded(page) {
    let EC = ExpectedConditions;
    let isPageLoaded = EC.presenceOf(element(by.id(page)));

    return EC.and(isPageLoaded);
  }

  waitUntilFullyLoaded(timeout = 5000, message, page) {
    return browser.driver.wait(
      this.isFullyLoaded(page),
      timeout,
      message ||
        `Expected page [${page}] to be fully loaded before ${timeout}ms but it wasn't.`
    );
  }
}
