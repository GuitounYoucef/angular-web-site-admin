import { createAction, props } from "@ngrx/store";
import { LoginCredentialsRequest, LoginCredentialsResponse, RoleResponse } from "../../Auth.Domain/Auth.Models/Auth";
import { PasswordUpdate } from "../../Auth.Domain/Auth.Models/passwordUpdate";



export const LOGIN_ACTION = "[auths] Login ... "
export const LOGIN_SUCCESS_ACTION = "[auths] login success"
export const LOGIN_FAILED_ACTION = "[auths] login failed"

export const loginAction = createAction(LOGIN_ACTION,props<{ credential: LoginCredentialsRequest }>());
export const loginSuccessAction = createAction(LOGIN_SUCCESS_ACTION,props<{ payload:LoginCredentialsResponse }>());
export const loginFailedAction = createAction(LOGIN_FAILED_ACTION, props<{ payload:string }>());
/*---------------------------------------------------------------------------------------------------------------*/

export const GET_USER_ROLE = "[Role] GET_USER_ROLE ... "
export const GET_USER_ROLE_SUCCESS = "[Role] get_user_role success"
export const GET_USER_ROLE_FAILED = "[Role] get_user_role failed"

export const getUserRole = createAction(GET_USER_ROLE,props<{ userName: string }>());
export const getUserRoleSuccess = createAction(GET_USER_ROLE_SUCCESS,props<{ role:RoleResponse }>());
export const getUserRoleFailed = createAction(GET_USER_ROLE_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const UPDATE_PASSWORD = "[PasswordUpdate] update password ... "
export const UPDATE_PASSWORD_SUCCESS = "[PasswordUpdate] update password success"
export const UPDATE_PASSWORD_FAILED = "[PasswordUpdate] update password failed"

export const updatePassword = createAction(UPDATE_PASSWORD,props<{ passwordUpdate: PasswordUpdate }>());
export const updatePasswordSuccess = createAction(UPDATE_PASSWORD_SUCCESS);
export const updatePasswordFailed = createAction(UPDATE_PASSWORD_FAILED);

