import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AuthState } from "@/store/reducers/auth.reducers";
import { login } from "@/store/actions/auth.action";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string = "";
  authenticated: Boolean;

  auth$: Observable<AuthState>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AuthState>,
    private router: Router
  ) {
    this.auth$ = store.pipe(select("auth"));
  }

  ngOnInit() {
    this.auth$.subscribe(state => {
      this.errorMessage = state.errorMessage;
      this.authenticated = state.authenticated;
    });

    if(this.authenticated) {
      this.router.navigateByUrl('/home');
    }

    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    await this.store.dispatch(
      login({
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      })
    );
    this.loading = false;
  }
}
