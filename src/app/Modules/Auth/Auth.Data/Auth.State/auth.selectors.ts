import { selectCurrentUser } from './../../../User/User.Data/User.State/user.selectors';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";  

export const AUTH_STATE_NAME='authReducer';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const selectLoginState = createSelector(
  getAuthState, 
  (state) => state
  )

  export const selectCurrentUserState = createSelector(
    getAuthState, 
    (state) => {
      return state.currentUser;
      }

    )

    export const selectLoadingState = createSelector(
      getAuthState, 
      (state) => {
        return state.loading;
        }
  
      )

