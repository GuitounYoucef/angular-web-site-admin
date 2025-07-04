import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getTeamMember, getTeamMemberFailed, getTeamMemberSuccess, getTeamsList, getTeamsListFailed, getTeamsListSuccess, saveTeamMember, saveTeamMemberFailed,
     saveTeamMemberSuccess, updateTeamMember, updateTeamMemberFailed, updateTeamMemberSuccess, deleteTeamMember, deleteTeamMemberFailed, deleteTeamMemberSuccess, restoreTeamMember, restoreTeamMemberFailed  } from "./team.actions";

import { catchError, exhaustMap, map, pipe, tap, of } from "rxjs";
import { ITeamRepository } from "../../Team.Domain/Team.IRepository/ITeamRepository";
import { Router } from "@angular/router";
import { TeamState } from "./team.reducer";
import { Store } from "@ngrx/store";


@Injectable()
export class TeamEffets{
    constructor(
                 private actions$: Actions,
                 private store: Store<TeamState>,
                 private teamRpository:ITeamRepository,
                 ){

    }

    loadTeamsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getTeamsList),
            exhaustMap((action) => {
                return this.teamRpository.getTeamsList().pipe(
                    map((TeamList) => {
                        console.log("getCardsTeamList : ",TeamList);
                        return getTeamsListSuccess({ TeamList });
                    }),
                    catchError(err => { return of(getTeamsListFailed()) }),  
                 
                )
            })
        )
    });


    loadTeamById$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getTeamMember),
            exhaustMap((action) => {
                return this.teamRpository.getTeamMemberById(action.id).pipe(
                    map((teamMember) => {
                        console.log("getTeamById : ",teamMember);
                        return getTeamMemberSuccess({ teamMember });
                    }),
                    catchError(err => { return of(getTeamMemberFailed()) }),  
                 
                )
            })
        )
    });    

    saveTeam$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(saveTeamMember),
            exhaustMap((action) => {
                return this.teamRpository.createTeamMember(action.teamMember).pipe(
                    map((respense) => {
                        let message="save Team Success"
                        this.store.dispatch(getTeamsList());
                        return saveTeamMemberSuccess({message});
                    })
                    ,
                    catchError(err => { return of(saveTeamMemberFailed()) }),  
                )
            })
        )
    });    


    updateTeam$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(updateTeamMember), 
            exhaustMap((action) => {
                return this.teamRpository.UpdateTeamMember(action.teamMember).pipe(
                    map((respense) => {
                        let message="update Team Success"
                        this.store.dispatch(getTeamsList());
                        return updateTeamMemberSuccess({message});
                    })
                    ,
                    catchError(err => { return of(updateTeamMemberFailed()) }),  
                )
            })
        )
    });   

    deleteTeamMember$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(deleteTeamMember), 
            exhaustMap((action) => {
                return this.teamRpository.deleteTeamMember(action.teamMemberId).pipe(
                    map((respense) => {
                        let message="delete Team Success"
                        this.store.dispatch(getTeamsList());
                        return updateTeamMemberSuccess({message});
                    })
                    ,
                    catchError(err => { return of(deleteTeamMemberFailed()) }),  
                )
            })
        )
    });  

    restoreTeamMember$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(restoreTeamMember), 
            exhaustMap((action) => {
                return this.teamRpository.restoreTeamMember(action.teamMemberId).pipe(
                    map((respense) => {
                        let message="restore Team Success"
                        this.store.dispatch(getTeamsList());
                        return updateTeamMemberSuccess({message});
                    })
                    ,
                    catchError(err => { return of(restoreTeamMemberFailed()) }),  
                )
            })
        )
    });  
    
    


}