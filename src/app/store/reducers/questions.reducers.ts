import { Question } from "@/models/question.model";
import { createReducer, on } from "@ngrx/store";
import { setQuestions } from "../actions/questions.action";

export const initialState: Question[] = [];

export const questionsReducer = createReducer(
  initialState,
  on(setQuestions, (state, {questions}) => questions)
);
