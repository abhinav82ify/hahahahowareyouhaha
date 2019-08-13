import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AuthState } from "@/store/reducers/auth.reducers";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AuthState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select("auth"),
      map(state => {
        return state.authenticated;
      })
    );
  }
}
