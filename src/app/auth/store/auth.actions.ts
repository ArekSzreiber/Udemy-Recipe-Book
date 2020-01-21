import {Action} from '@ngrx/store';
import {User} from '../user.model';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  type: string = LOGIN;

  constructor(public payload: User) {
  }
}


export class Logout implements Action {
  type: string = LOGOUT;
}

export type AuthActions =
  | Login
  | Logout;
