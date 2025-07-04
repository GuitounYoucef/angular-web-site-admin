import { createFeatureSelector, createSelector } from "@ngrx/store";
import { statisticsState } from "./satistics.reducer";

export const STATISTICS_STATE_NAME='statisticReducer';

const getstatisticsState = createFeatureSelector<statisticsState>(STATISTICS_STATE_NAME);


export const selectVisiteNumber= createSelector(getstatisticsState, (state) => {
    return state.visiteNumber ? state.visiteNumber : null;
  })




