import { browser, by, element } from "protractor";
import { AppPage } from "./app.po";

export class LoginPage extends AppPage {
  
  get username() {
    return element(by.id("username"));
  }

  get password() {
    return element(by.id("password"));
  }

  get loginBtn() {
    return element(by.id("loginBtn"));
  }

  get errorMsg() {
    return element(by.id("errorMsg"));
  }

  enterUsername(username) {
    return this.username.sendKeys(username);
  }

  enterPassword(password) {
    return this.password.sendKeys(password);
  }

  getTitleText() {
    return element(by.id("login")).getText();
  }
}
