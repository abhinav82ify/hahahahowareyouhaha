import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class SurveyQuestionsService {
  BASE_URL = "http://localhost:9090";

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get<any>(`${this.BASE_URL}/survey-questions`);
  }

  calculateScore(answers) {
    return this.http.post<any>(`${this.BASE_URL}/calculate-score`, {answers});
  }
}
