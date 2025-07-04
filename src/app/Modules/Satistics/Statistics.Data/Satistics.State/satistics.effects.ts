import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IStatisticsRepository } from "../../Statistics.Domain/Statistics.IRepository/IStatisticsRepository";
import { catchError, exhaustMap, map, of } from "rxjs";
import { getVisiteNumber, getVisiteNumberFailed, getVisiteNumberSuccess } from "./satistics.actions";

@Injectable()
export class StatisticsEffets{
    constructor(
                 private actions$: Actions,
                 private statisticsRpository:IStatisticsRepository,
                 ){

    }

    loadPostsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getVisiteNumber),
            exhaustMap((action) => {
                return this.statisticsRpository.getVisiteNumber().pipe(
                    map((numberVisite) => {
                        console.log("numberVisite : ",numberVisite);
                        return getVisiteNumberSuccess({ visiteNumber: numberVisite });
                    }),
                    catchError(err => { return of(getVisiteNumberFailed()) }),  
                 
                )
            })
        )
    });
}