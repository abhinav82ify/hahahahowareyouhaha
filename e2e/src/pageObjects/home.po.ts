import { by, element } from "protractor";
import { AppPage } from "./app.po";
import { HeaderPo } from "./header.po";

export class HomePage extends AppPage {
  get appHeader() {
    return new HeaderPo();
  }

  get heading() {
    return element(by.id("heading"));
  }

  get content() {
    return element(by.id("content"));
  }

  get startBtn() {
    return element(by.id("startBtn"));
  }
}
