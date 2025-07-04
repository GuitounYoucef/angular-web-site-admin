import { Action, createReducer, on} from "@ngrx/store";
import {  TeamMember } from "../../Team.Domain/Team.Models/Team";
import { updateTeamMember, getTeamMemberSuccess, getTeamsListSuccess } from "./team.actions";

export interface TeamState{
    teamList : TeamMember[];
    TeamDetail: TeamMember | null;

};

export const initialState:TeamState={
    teamList:[],
    TeamDetail:null
};

/*************************************************************************************************/
export const TeamReducer = createReducer(
    initialState,
  on(getTeamsListSuccess, (state, action) => {
    return {
      ...state,
      teamList:action.TeamList

    };
  }),
  on(getTeamMemberSuccess, (state, action) => {
    return {
      ...state,
      TeamDetail:action.teamMember
    };
  }),
  on(updateTeamMember, (state, action) => {
    return {
      ...state,
      TeamDetail:action.teamMember
    };
  }),     
);

export function reducer(state: TeamState | undefined, action: Action) {
    return TeamReducer(state, action);
}