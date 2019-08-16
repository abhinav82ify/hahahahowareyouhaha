import { Component, OnInit } from "@angular/core";
import { Question } from "@/models/question.model";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { SurveyQuestionsService } from "@/services/survey-questions.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  highScoreColor = "primary";
  mediumScoreColor = "accent";
  lowScoreColor = "warn";
  questions$: Observable<Question[]>;
  score = 0;
  color: string;

  constructor(
    store: Store<Question[]>,
    private surveyQuestionsService: SurveyQuestionsService
  ) {
    this.questions$ = store.pipe(select("questions"));
  }

  ngOnInit() {
    let answers = [];
    this.questions$.subscribe(state => {
      state.forEach(question => {
        answers.push(question.selectedChoice);
      });
      this.surveyQuestionsService
        .calculateScore(answers)
        .subscribe(({ score }) => {
          this.score = score * 10;
          if (Math.round(score) < 4) {
            this.color = this.lowScoreColor;
          } else if (Math.round(score) < 7) {
            this.color = this.mediumScoreColor;
          } else {
            this.color = this.highScoreColor;
          }
        });
    });
  }
}
