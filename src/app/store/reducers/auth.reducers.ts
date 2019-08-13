import { createReducer, on } from "@ngrx/store";

import {
  loginSuccess,
  loginFailure,
  logout
} from "@/store/actions/auth.action";
import { User } from '@/models/user.model';

export interface AuthState {
  authenticated: Boolean,
  user: User,
  errorMessage: string
}

export const initialState: AuthState = {
  authenticated: false,
  user: null,
  errorMessage: ""
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    authenticated: true,
    user: user,
    errorMessage: ''
  })),
  on(loginFailure, (state, { errorMessage }) => ({
    ...initialState,
    errorMessage: errorMessage
  })),
  on(logout, () => initialState)
);
