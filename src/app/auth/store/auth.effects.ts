import {Actions, ofType} from '@ngrx/effects';

import * as authActions from './auth.actions';

export class AuthEffects {

  authLogin = this.actions$.pipe(
    ofType(authActions.LOGIN_START)
  );

  constructor(private actions$: Actions) {
  }
}
