import { createAction, props } from "@ngrx/store";
import {  TeamMember } from "../../Team.Domain/Team.Models/Team";


export const GET_TEAMS_LIST = "[teams list] get Teams List"
export const GET_TEAMS_LIST_SUCCESS = "[teams list] get Teams List success"
export const GET_TEAMS_LIST_FAILED = "[teams list] get Teams List failed"

export const getTeamsList = createAction(GET_TEAMS_LIST);
export const getTeamsListSuccess = createAction(GET_TEAMS_LIST_SUCCESS, props<{ TeamList: TeamMember[] }>());
export const getTeamsListFailed = createAction(GET_TEAMS_LIST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const GET_TEAM_MEMBER = "[team Member] get Team Member"
export const GET_TEAM_MEMBER_SUCCESS = "[teams Member] get Teams Member success"
export const GET_TEAM_MEMBER_FAILED = "[team Member] get Teams Member failed"

export const getTeamMember = createAction(GET_TEAM_MEMBER, props<{ id:number }>());
export const getTeamMemberSuccess = createAction(GET_TEAM_MEMBER_SUCCESS, props<{ teamMember: TeamMember }>());
export const getTeamMemberFailed = createAction(GET_TEAM_MEMBER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const SAVE_TEAM_MEMBER = "[team] save Team Member"
export const SAVE_TEAM_MEMBER_SUCCESS = "[teams] save Team Member success"
export const SAVE_TEAM_MEMBER_FAILED = "[teams] save Team Member failed"

export const saveTeamMember = createAction(SAVE_TEAM_MEMBER, props<{ teamMember: TeamMember }>());
export const saveTeamMemberSuccess = createAction(SAVE_TEAM_MEMBER_SUCCESS, props<{ message: string }>());
export const saveTeamMemberFailed = createAction(SAVE_TEAM_MEMBER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const UPDATE_TEAM_MEMBER = "[team] update Team Member"
export const UPDATE_TEAM_MEMBER_SUCCESS = "[teams] update Team Member success"
export const UPDATE_TEAM_MEMBER_FAILED = "[teams] update Team Member failed"

export const updateTeamMember = createAction(UPDATE_TEAM_MEMBER, props<{ teamMember: TeamMember }>());
export const updateTeamMemberSuccess = createAction(UPDATE_TEAM_MEMBER_SUCCESS, props<{ message: string }>());
export const updateTeamMemberFailed = createAction(UPDATE_TEAM_MEMBER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const DELETE_TEAM_MEMBER = "[team] delete Team Member"
export const DELETE_TEAM_MEMBER_SUCCESS = "[teams] delete Team Member success"
export const DELETE_TEAM_MEMBER_FAILED = "[teams] delete Team Member failed"

export const deleteTeamMember = createAction(DELETE_TEAM_MEMBER, props<{ teamMemberId: number }>());
export const deleteTeamMemberSuccess = createAction(DELETE_TEAM_MEMBER_SUCCESS, props<{ message: string }>());
export const deleteTeamMemberFailed = createAction(DELETE_TEAM_MEMBER_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const RESTORE_TEAM_MEMBER = "[team] restore Team Member"
export const RESTORE_TEAM_MEMBER_SUCCESS = "[teams] restore Team Member success"
export const RESTORE_TEAM_MEMBER_FAILED = "[teams] restore Team Member failed"

export const restoreTeamMember = createAction(RESTORE_TEAM_MEMBER, props<{ teamMemberId: number }>());
export const restoreTeamMemberSuccess = createAction(RESTORE_TEAM_MEMBER_SUCCESS, props<{ message: string }>());
export const restoreTeamMemberFailed = createAction(RESTORE_TEAM_MEMBER_FAILED);