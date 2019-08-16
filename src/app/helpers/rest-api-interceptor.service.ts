import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";
import mockQuestions from "./mockQuestions";

let users;

@Injectable()
export class RestApiInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    users = JSON.parse(localStorage.getItem("appUsers")) || [
      {
        name: "Abhinav Sharma",
        id: 30,
        username: "abhinav82ify",
        password: "password"
      }
    ];
    const { method, url, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/authenticate") && method === "POST":
          return authenticate();
        case url.endsWith("/survey-questions") && method === "GET":
          return surveyQuestions();
        case url.endsWith("/calculate-score") && method === "POST":
          return calculateScore();
        default:
          return next.handle(request);
      }
    }

    function authenticate() {
      const { username, password } = body;

      const user = users.find(
        u => u.username === username && u.password === password
      );
      if (!user) {
        throw new Error("Username and password invalid");
      } else {
        return of(
          new HttpResponse({
            status: 200,
            body: {
              id: user.id,
              username: user.username,
              name: user.name,
              token: "0000-XXX-000"
            }
          })
        );
      }
    }

    function surveyQuestions() {
      return of(
        new HttpResponse({
          status: 200,
          body: mockQuestions
        })
      );
    }

    function calculateScore() {
      const { answers } = body;

      let score = 0;
      answers.forEach(element => {
        score += parseInt(element);
      });

      score /= answers.length;

      return of(new HttpResponse({
        status: 200,
        body: { score }
      }));
    }
  }
}
