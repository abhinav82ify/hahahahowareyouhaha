import { Component, OnInit } from "@angular/core";
import { Question } from "@/models/question.model";
import { SurveyQuestionsService } from "@/services/survey-questions.service";
import { Store, select } from "@ngrx/store";
import { getQuestions } from '@/store/actions/questions.action';
import { Observable } from 'rxjs';

const availableChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent implements OnInit {
  questions: Question[];
  percentCompleted: Number = 0;
  questions$: Observable<Question[]>;
  constructor(
    private surveyQuestionsService: SurveyQuestionsService,
    private store: Store<Question[]>
  ) {
    this.questions$ = store.pipe(select("questions"));
    store.dispatch(getQuestions());
  }

  ngOnInit() {
    this.questions$.subscribe(state => {
      this.questions = state;
      this.questions.forEach(element => {
        element.choices = availableChoices;
      });
      this.calculateCompletedPercentage();
    })
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
