import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SurveyQuestionsService } from "@/services/survey-questions.service";
import { getQuestions, setQuestions } from "../actions/questions.action";
import { switchMap, map } from "rxjs/operators";

@Injectable()
export class QuestionsEffects {
  constructor(
    private actions$: Actions,
    private surveyQuestionsService: SurveyQuestionsService
  ) {}

  getQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuestions),
      switchMap(() =>
        this.surveyQuestionsService
          .getQuestions()
          .pipe(map(questions => setQuestions({questions})))
      )
    )
  );
}
