import { by, element } from "protractor";
import { AppPage } from "./app.po";
import { HeaderPo } from "./header.po";

export class ResultsPage extends AppPage {
  get appHeader() {
    return new HeaderPo();
  }

  get heading() {
    return element(by.id("resultsHeading"));
  }

  get scoreBar() {
    return element(by.id("scoreBar"));
  }
}
