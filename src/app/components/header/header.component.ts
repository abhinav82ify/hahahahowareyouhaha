import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AuthState } from "@/store/reducers/auth.reducers";
import { Observable } from "rxjs";
import { logout } from "@/store/actions/auth.action";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  auth$: Observable<any>;
  authenticated = false;
  isHomeRoute = false;

  constructor(private store: Store<AuthState>, private router: Router) {
    this.auth$ = store.pipe(select("auth"));
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.isHomeRoute = val.url === "/home" || val.url === "/";
      }
    });

    this.auth$.subscribe(state => {
      this.authenticated = state.authenticated;
    });
  }

  logout() {
    this.store.dispatch(logout());
  }
}
