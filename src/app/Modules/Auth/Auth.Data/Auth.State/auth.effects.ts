import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";


import { catchError, exhaustMap, map, pipe, tap, of, switchMap, from } from "rxjs";
import { IAuthRepository } from "../../Auth.Domain/Auth.IRepository/IAuthRepository";
import { Router } from "@angular/router";
import { LOGIN_SUCCESS_ACTION, getUserRole, getUserRoleFailed, getUserRoleSuccess, loginAction, loginFailedAction, loginSuccessAction, updatePassword, updatePasswordFailed, updatePasswordSuccess } from "./auth.actions";
import { LoginCredentialsRequest } from "../../Auth.Domain/Auth.Models/Auth";
import { LoginWithCredentialsUseCase } from "../../Auth.Domain/Auth.UseCases/LoginWithCredentialsUseCase";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Injectable()
export class AuthEffets {
    constructor(
        private actions$: Actions,
        private loginWithCredentialsUseCase: LoginWithCredentialsUseCase,
        private authRpository: IAuthRepository,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {

    }

    onLoginAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            map(action => action.credential),
            switchMap((credential: LoginCredentialsRequest) =>
                from(
                    this.loginWithCredentialsUseCase.execute({
                        username: credential.username,
                        password: credential.password,
                    })
                ).pipe(
                    map((response) => loginSuccessAction({ payload: response })),
                    catchError((er) => {
                        this._snackBar.open("خطأ في إسم المستخدم أو كلمة المرور","إعادة المحاولة",{duration:60000, panelClass: ["red-snackbar"]})
                        return of(loginFailedAction({ payload: "" }));
                    })
                )
            )
        )
    );

    onLoginSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(LOGIN_SUCCESS_ACTION),
                tap((_) => {
                    this.router.navigateByUrl('/main');
                })
            ),
        { dispatch: false }
    );

    getUserRole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUserRole),
            exhaustMap((action) => {
                return this.authRpository.getUserRole(action.userName).pipe(
                    map((role) => {
                        return getUserRoleSuccess({ role });
                    }),
                    catchError(err => { return of(getUserRoleFailed()) }),

                )
            })

        )
    );

    updatePassword$ = createEffect(() =>
    this.actions$.pipe(
        ofType(updatePassword),
        exhaustMap((action) => {
            return this.authRpository.updatePassword(action.passwordUpdate).pipe(
                map((updatePassword) => {
                    return updatePasswordSuccess();
                }),
                catchError(err => { return of(updatePasswordFailed()) }),

            )
        })

    )
);
}