import { Action, createReducer, on } from "@ngrx/store";
import { VisiteNumber } from "../../Statistics.Domain/Satistics.Models/VisiteNumber";
import { getVisiteNumberSuccess } from "./satistics.actions";

export interface statisticsState{
    visiteNumber : VisiteNumber| null;


};

export const initialState:statisticsState={
    visiteNumber:null
};

/*************************************************************************************************/
export const StatisticReducer = createReducer(
    initialState,
  on(getVisiteNumberSuccess, (state, action) => {
    return {
      ...state,
      visiteNumber:action.visiteNumber

    };
  }),
   
);

export function reducer(state: statisticsState | undefined, action: Action) {
    return StatisticReducer(state, action);
}