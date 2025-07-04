import { createAction, props } from "@ngrx/store";
import {  User } from "../../User.Domain/User.Models/User";


export const GET_USERS_LIST = "[users list] get Users List"
export const GET_USERS_LIST_SUCCESS = "[users list] get Users List success"
export const GET_USERS_LIST_FAILED = "[users list] get Users List failed"

export const getUsersList = createAction(GET_USERS_LIST);
export const getUsersListSuccess = createAction(GET_USERS_LIST_SUCCESS, props<{ UserList: User[] }>());
export const getUsersListFailed = createAction(GET_USERS_LIST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const GET_USER = "[user] get User by id"
export const GET_USER_SUCCESS = "[users] get Users by id success"
export const GET_USER_FAILED = "[user] get Users by id failed"

export const getUser = createAction(GET_USER, props<{ id:number }>());
export const getUserSuccess = createAction(GET_USER_SUCCESS, props<{ user: User }>());
export const getUserFailed = createAction(GET_USER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const SAVE_USER = "[user] save User"
export const SAVE_USER_SUCCESS = "[users] save User success"
export const SAVE_USER_FAILED = "[users] save User failed"

export const saveUser = createAction(SAVE_USER, props<{ user: User }>());
export const saveUserSuccess = createAction(SAVE_USER_SUCCESS, props<{ message: string }>());
export const saveUserFailed = createAction(SAVE_USER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const UPDATE_USER = "[user] update User"
export const UPDATE_USER_SUCCESS = "[users] update User success"
export const UPDATE_USER_FAILED = "[users] update User failed"

export const updateUser = createAction(UPDATE_USER, props<{ user: User }>());
export const updateUserSuccess = createAction(UPDATE_USER_SUCCESS, props<{ message: string }>());
export const updateUserFailed = createAction(UPDATE_USER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const DELETE_USER = "[user] delete User"
export const DELETE_USER_SUCCESS = "[users] delete User success"
export const DELETE_USER_FAILED = "[users] delete User failed"

export const deleteUser = createAction(DELETE_USER, props<{ user: User }>());
export const deleteUserSuccess = createAction(DELETE_USER_SUCCESS, props<{ message: string }>());
export const deleteUserFailed = createAction(DELETE_USER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/