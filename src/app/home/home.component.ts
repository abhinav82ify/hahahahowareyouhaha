import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '@/store/reducers/auth.reducers';
import { Observable } from 'rxjs';
import { logout } from '@/store/actions/auth.action';
import { User } from '@/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  auth$: Observable<AuthState>;
  user: User = undefined;
  authenticated: Boolean = false;

  constructor(private store: Store<AuthState>) {
    this.auth$ = store.pipe(select('auth'));
   }

  ngOnInit() {
    this.auth$.subscribe((state) => {
      this.user = state.user;
      this.authenticated = state.authenticated;
    });
  }

  logout() {
    this.store.dispatch(logout());
  }

}
