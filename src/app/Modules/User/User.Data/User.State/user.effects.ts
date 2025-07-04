import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUser, getUserFailed, getUserSuccess, getUsersList, getUsersListFailed, getUsersListSuccess, saveUser, saveUserFailed,
     saveUserSuccess, updateUser, updateUserFailed, updateUserSuccess, deleteUser, deleteUserFailed, deleteUserSuccess  } from "./user.actions";

import { catchError, exhaustMap, map, pipe, tap, of } from "rxjs";
import { IUserRepository } from "../../User.Domain/User.IRepository/IUserRepository";
import { Router } from "@angular/router";
import { UserState } from "./user.reducer";
import { Store } from "@ngrx/store";


@Injectable()
export class UserEffets{
    constructor(
                 private actions$: Actions,
                 private userRpository:IUserRepository,
                 private store: Store<UserState>,
                 ){

    }

    loadUsersList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getUsersList),
            exhaustMap((action) => {
                return this.userRpository.getUsersList().pipe(
                    map((UserList) => {
                        console.log("get User List : ",UserList);
                        return getUsersListSuccess({ UserList });
                    }),
                    catchError(err => { return of(getUsersListFailed()) }),  
                 
                )
            })
        )
    });




    saveUser$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(saveUser),
            exhaustMap((action) => {
                return this.userRpository.createUser(action.user).pipe(
                    map((respense) => {
                        let message="save User Success"
                        this.store.dispatch(getUsersList());
                        return saveUserSuccess({message});
                    })
                    ,
                    catchError(err => { return of(saveUserFailed()) }),  
                )
            })
        )
    });    


    updateUser$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(updateUser), 
            exhaustMap((action) => {
                return this.userRpository.UpdateUser(action.user).pipe(
                    map((respense) => {
                        let message="update User Success"
                        return updateUserSuccess({message});
                    })
                    ,
                    catchError(err => { return of(updateUserFailed()) }),  
                )
            })
        )
    });   
    
    


}