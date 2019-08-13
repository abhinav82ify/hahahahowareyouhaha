import { createAction, props, union } from "@ngrx/store";
import { User } from "@/models/user.model";

export const login = createAction(
  "[Auth] Login",
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  "[Auth] Login success",
  props<{ user: User }>()
);
export const loginFailure = createAction(
  "[Auth] Login failure",
  props<{ errorMessage: string }>()
);
export const logout = createAction("[Auth] Logout");