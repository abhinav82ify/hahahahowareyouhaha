import { Component, OnInit } from "@angular/core";
import { Question } from "@/models/question.model";
import { SurveyQuestionsService } from "@/services/survey-questions.service";

const availableChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent implements OnInit {
  questions: Question[];
  percentCompleted: Number = 0;
  constructor(private surveyQuestionsService: SurveyQuestionsService) {}

  ngOnInit() {
    this.surveyQuestionsService.getQuestions().subscribe(data => {
      this.questions = data;
      this.questions.forEach(element => {
        element.choices = availableChoices;
      });
    });
  }

  calculateCompletedPercentage() {
    let questionsAnswered = 0;
    this.questions.forEach(question => {
      if (question.selectedChoice !== "") {
        questionsAnswered += 1;
      }
    });

    this.percentCompleted = Math.round(
      (questionsAnswered / this.questions.length) * 100
    );
  }
}
