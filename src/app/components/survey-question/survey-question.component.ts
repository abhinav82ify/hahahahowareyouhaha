import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Question } from "@/models/question.model";

@Component({
  selector: "app-survey-question",
  templateUrl: "./survey-question.component.html",
  styleUrls: ["./survey-question.component.scss"]
})
export class SurveyQuestionComponent {
  @Input() question: Question;

  @Output() calculateCompletedPercentage = new EventEmitter<string>();

  selectChoice(selectedChoice) {
    this.question.selectedChoice = selectedChoice;
    this.calculateCompletedPercentage.emit("");
  }
}
