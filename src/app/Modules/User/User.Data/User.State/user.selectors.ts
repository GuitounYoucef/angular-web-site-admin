import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";  

export const USER_STATE_NAME='userReducer';

const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME);

export const selectCurrentUser = createSelector(getUserState, (state) => {
    return state.UserDetail ? state.UserDetail : null;
  })

export const selectUserList = createSelector(
  getUserState,
  (state) => {
    return state.userList ? state.userList : [];
  }
);