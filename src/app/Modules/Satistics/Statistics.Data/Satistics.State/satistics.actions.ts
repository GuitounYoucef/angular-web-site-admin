/*---------------------------------------------------------------------------------------------------------------*/

import { createAction, props } from "@ngrx/store";
import { VisiteNumber } from "../../Statistics.Domain/Satistics.Models/VisiteNumber";

export const GET_VISITE_NUMBER = "[visite number] get visite number"
export const GET_VISITE_NUMBER_SUCCESS = "[visite number] get visite number success"
export const GET_VISITE_NUMBER_FAILED = "[visite number] get visite number failed"

export const getVisiteNumber = createAction(GET_VISITE_NUMBER);
export const getVisiteNumberSuccess = createAction(GET_VISITE_NUMBER_SUCCESS, props<{ visiteNumber: VisiteNumber}>());
export const getVisiteNumberFailed = createAction(GET_VISITE_NUMBER_FAILED);