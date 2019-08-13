import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "@/services/authentication.service";
import {
  login,
  loginSuccess,
  loginFailure,
  logout
} from "../actions/auth.action";
import { exhaustMap, map, tap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(login),
        exhaustMap(action =>
          this.authService.login(action.username, action.password).pipe(
            map(user => loginSuccess({ user })),
            catchError(error =>
              of(loginFailure({ errorMessage: error.message }))
            )
          )
        )
      ),
    { dispatch: true }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigateByUrl("/home"))
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(() => this.actions$.pipe(ofType(loginFailure)), {
    dispatch: false
  });

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.router.navigateByUrl("/"))
      ),
    { dispatch: false }
  );
}
