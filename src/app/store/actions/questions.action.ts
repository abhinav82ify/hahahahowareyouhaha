import { createAction, props } from "@ngrx/store";
import { Question } from "@/models/question.model";

export const getQuestions = createAction("[Questions] Get");

export const setQuestions = createAction(
  "[Questions] Set",
  props<{ questions: Question[] }>()
);
