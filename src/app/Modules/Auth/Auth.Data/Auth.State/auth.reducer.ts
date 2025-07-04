import { RoleResponse } from './../../Auth.Domain/Auth.Models/Auth';
import { Action, createReducer, on} from "@ngrx/store";
import { loginAction, loginSuccessAction, loginFailedAction, getUserRoleSuccess } from "./auth.actions";


export interface AuthState{
  loading: boolean;
  authenticated: boolean;
  loginError: string;
  currentUser:RoleResponse;

};

export const initialState:AuthState={
  loading: false,
  authenticated: false,
  loginError: '',
  currentUser:new RoleResponse()
};

/*************************************************************************************************/
export const AuthReducer = createReducer(
    initialState,
  on(loginAction, (state) => {
    return {
      ...state,
      loading: true,
      loginError: '',

    };
  }),
  on(loginSuccessAction, (state, action)  => {
    return {
      ...state,
      loading: false,
      authenticated: true,
      loginError: '',
      currentUser:action.payload
    };
  }), 
  on(loginFailedAction, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      loginError: payload,
    };
  }),     

  on(getUserRoleSuccess, (state, action)  => {
    return {
      ...state,
      currentUser:action.role
    };
  }),
);

export function reducer(state: AuthState | undefined, action: Action) {
    return AuthReducer(state, action);
}