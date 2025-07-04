import { createFeatureSelector, createSelector } from "@ngrx/store";


import { settingsState } from "./settings.reducer";
import { Company } from "../../Settings.Domain/Settings.Models/company";
import { FontSettings } from "../../Settings.Domain/Settings.Models/Settings";




export const SETTINGS_STATE_NAME='settingsReducer';

const getSettingsState = createFeatureSelector<settingsState>(SETTINGS_STATE_NAME);


export const selectSettings = createSelector(getSettingsState, (state) => {
    return state.settings ? state.settings : new FontSettings();
  })

  export const selectCompantSettings = createSelector(getSettingsState, (state) => {
    return state.companySettings ? state.companySettings : new Company();
  })


export const selectPostCategories = createSelector(
  getSettingsState,
  (state) => {
    return state.postCategories ? state.postCategories : [];
  }
);