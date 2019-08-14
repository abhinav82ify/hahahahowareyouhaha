import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '@/store/reducers/auth.reducers';
import { Observable } from 'rxjs';
import { logout } from '@/store/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth$: Observable<any>;
  authenticated = false;

  constructor(private store: Store<AuthState>) {
    this.auth$ = store.pipe(select('auth'));
   }

  ngOnInit() {
    this.auth$.subscribe(state => {
      this.authenticated = state.authenticated;
    });
  }

  logout() {
    this.store.dispatch(logout());
  }

}
