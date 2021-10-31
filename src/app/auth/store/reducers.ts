import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/auth-state.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state: IAuthState) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerSuccessAction, (state: IAuthState, action) => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state: IAuthState, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
