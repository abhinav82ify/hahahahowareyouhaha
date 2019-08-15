import { AppPage } from "./app.po";
import { HeaderPo } from "./header.po";
import { ProgressBarPo } from "./progress-bar.po";
import { element, by } from "protractor";

export class SurveyPage extends AppPage {
  get appHeader() {
    return new HeaderPo();
  }

  get progressBar() {
    return new ProgressBarPo();
  }

  get title() {
    return element(by.id("surveyTitle"));
  }

  getQuestion(index) {
    return element(by.id(`surveyQuestion-${index}`));
  }
}
