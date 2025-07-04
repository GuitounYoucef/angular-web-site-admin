import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";


import { catchError, exhaustMap, map, pipe, tap, of, switchMap } from "rxjs";


import { GET_POST_CTEGORIE_LIST, getCompanySettings, getCompanySettingsSuccess, getPostCategorieList, getPostCategorieListFailed, getPostCategorieListSuccess, getFontSettings, getFontSettingsFailed, getFontSettingsSuccess, savePostCategorie, savePostCategorieFailed, savePostCategorieSuccess, updateCompanySetting, updateFontSetting, updateFontSettingFailed, updateFontSettingSuccess, updatePostCategorie, updatePostCategorieSuccess, updatePostCategorieFailed } from "./settings.actions";
import { ISettingsRepository } from "../../Settings.Domain/Settings.IRepository/ISettingsRepository";


@Injectable()
export class SettingsEffets{

    constructor(
                 private actions$: Actions,
                 private settingsRepository:ISettingsRepository,){

    }

    loadPostCategoriesList$ = createEffect(
        () => 
        this.actions$.pipe(
            ofType(getPostCategorieList),
            exhaustMap((action) => {
                return this.settingsRepository.getPostCategorie().pipe(
                    map((postCategorieList) => {
                        console.log("getCardsPostList : ",postCategorieList);
                        return getPostCategorieListSuccess({ postCategorie:postCategorieList });
                    }),
                    catchError(err => { return of(getPostCategorieListFailed()) }),                  
                )
            })
        ),
        { dispatch: true }
    );

    reloadPostCategoriesList$ = createEffect(
        () => 
        this.actions$.pipe(
            ofType(savePostCategorieSuccess, updatePostCategorieSuccess),
            exhaustMap((action) => {
                return this.settingsRepository.getPostCategorie().pipe(
                    map((postCategorieList) => {
                        console.log("getCardsPostList : ",postCategorieList);
                        return getPostCategorieListSuccess({ postCategorie:postCategorieList });
                    }),
                    catchError(err => { return of(getPostCategorieListFailed()) }),                  
                )
            })
        ),
        { dispatch: true }
    );    

    createPostCategorie$ = createEffect(
        () => 
        this.actions$.pipe(       
            ofType(savePostCategorie),
            switchMap((action) => {
                return this.settingsRepository.createPostCategorie(action.postCategorie).pipe(
                    map((respense) => {
                        let message="save Post Success"
                        return savePostCategorieSuccess({message});
                    })
                    ,
                    catchError(err => { return of(savePostCategorieFailed()) }),  
                )
            }),
            
        ),
        { dispatch: true }
        );    

        updatePostCategorie$ = createEffect(
            () => 
            this.actions$.pipe(       
                ofType(updatePostCategorie),
                switchMap((action) => {
                    return this.settingsRepository.updatePostCategorie(action.postCategorie).pipe(
                        map((respense) => {
                            let message="save Post Success"
                            return updatePostCategorieSuccess({message});
                        })
                        ,
                        catchError(err => { return of(updatePostCategorieFailed()) }),  
                    )
                }),
                
            ),
            { dispatch: true }
            );    

//************************************************************************************************************** */
    loadFontSetting$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getFontSettings),
            exhaustMap((action) => {
                return this.settingsRepository.getFontSettings().pipe(
                    map((settings) => {
                        console.log("getPostById : ",settings);
                        return getFontSettingsSuccess({ settings });
                    }),
                    catchError(err => { return of(getFontSettingsFailed()) }),                
                )
            })
        )
    });    

    updateFontSettings$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(updateFontSetting), 
            exhaustMap((action) => {
                return this.settingsRepository.updateFontSettings(action.fontSettings).pipe(
                    map((respense) => {
                        let message="update Post Success"
                        return updateFontSettingSuccess({message});
                    })
                    ,
                    catchError(err => { return of(updateFontSettingFailed()) }),  
                )
            })
        )
    });   

    //************************************************************************************************************** */
    loadCompanySetting$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getCompanySettings),
            exhaustMap((action) => {
                return this.settingsRepository.getCompanySettings().pipe(
                    map((company) => {
                        console.log("Company Settings : ",company);
                        return getCompanySettingsSuccess({ CompanySettings:company });
                    }),
                    catchError(err => { return of(getFontSettingsFailed()) }),                
                )
            })
        )
    });    

    updateCompanySettings$ = createEffect(() => {
        return this.actions$.pipe(       
            ofType(updateCompanySetting), 
            exhaustMap((action) => {
                return this.settingsRepository.updateCompanySettings(action.companySetting).pipe(
                    map((respense) => {
                        let message="update Post Success"
                        return updateFontSettingSuccess({message});
                    })
                    ,
                    catchError(err => { return of(updateFontSettingFailed()) }),  
                )
            })
        )
    });   
    
    


}