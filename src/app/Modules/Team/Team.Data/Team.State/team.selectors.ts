import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TeamState } from "./team.reducer";  

export const TEAM_STATE_NAME='teamReducer';

const getTeamState = createFeatureSelector<TeamState>(TEAM_STATE_NAME);

export const selectEditingTeam = createSelector(getTeamState, (state) => {
    return state.TeamDetail ? state.TeamDetail : null;
  })

export const selectTeamList = createSelector(
  getTeamState,
  (state) => {
    return state.teamList ? state.teamList : [];
  }
);