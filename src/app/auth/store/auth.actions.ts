import {Action} from '@ngrx/store';
import {User} from '../user.model';

export const LOGIN_START = '[Auth] Login start';
export const LOGIN = '[Auth] Login';
export const LOGIN_FAIL = '[Auth] Login fail';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type: string = LOGIN;

  constructor(public payload: User) {
  }
}


export class LoginStart implements Action {
  readonly type: string = LOGIN_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export class LoginFail implements Action {
  readonly type: string = LOGIN_FAIL;

  constructor(public payload: string) {
  }

}

export class Logout implements Action {
  readonly type: string = LOGOUT;
}

export type AuthActions =
  | Login
  | Logout
  | LoginStart
  | LoginFail
  ;
