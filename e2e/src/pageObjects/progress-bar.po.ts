import { element, by } from "protractor";

export class ProgressBarPo {
  get statusBar() {
    return element(by.id("statusBar"));
  }

  get finishBtn() {
    return element(by.id("surveyFinishBtn"));
  }
}
