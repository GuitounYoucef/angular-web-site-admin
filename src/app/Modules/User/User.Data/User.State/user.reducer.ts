import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../../User.Domain/User.Models/User";
import { updateUser, getUserSuccess, getUsersListSuccess } from "./user.actions";

export interface UserState {
  userList: User[];
  UserDetail: User | null;

};

export const initialState: UserState = {
  userList: [],
  UserDetail: null
};

/*************************************************************************************************/
export const UserReducer = createReducer(
  initialState,
  on(getUsersListSuccess, (state, action) => {
    return {
      ...state,
      userList: action.UserList

    };
  }),
  on(getUserSuccess, (state, action) => {
    return {
      ...state,
      UserDetail: action.user
    };
  }),
  on(updateUser, (state, action) => {
    return {
      ...state,
      UserDetail: action.user
    };
  }),
);

export function reducer(state: UserState | undefined, action: Action) {
  return UserReducer(state, action);
}