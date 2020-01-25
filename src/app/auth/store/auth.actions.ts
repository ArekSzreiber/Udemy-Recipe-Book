import {Action} from '@ngrx/store';

export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const LOGIN_START = '[Auth] Login Start';
export const LOGOUT = '[Auth] Logout';
export const SIGN_UP_START = '[Auth] Sign Up Start';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {
  }
}

export class AutoLogin implements Action {
  readonly type: string = AUTO_LOGIN;
}

export class ClearError implements Action {
  readonly type: string = CLEAR_ERROR;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {
  }
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;

  constructor(public payload: string) {
  }
}

export class SignUpStart implements Action {
  readonly type: string = SIGN_UP_START;

  constructor(public payload: { email: string; password: string }) {
  }
}

export type AuthActions =
  | AuthenticateFail
  | AuthenticateSuccess
  | AutoLogin
  | ClearError
  | LoginStart
  | Logout
  | SignUpStart
  ;
