import { Action, createReducer, on } from "@ngrx/store";


import { PostCategorie, FontSettings } from "../../Settings.Domain/Settings.Models/Settings";
import { getCompanySettingsSuccess, getPostCategorieListSuccess, getFontSettingsSuccess } from "./settings.actions";
import { Company } from "../../Settings.Domain/Settings.Models/company";

export interface settingsState {
  settings: FontSettings;
  postCategories: PostCategorie[];
  companySettings: Company;

};

export const initialState: settingsState = {
  postCategories: [],
  settings: new FontSettings(),
  companySettings: new Company(),
};

/*************************************************************************************************/
export const SettingsReducer = createReducer(
  initialState,
  on(getPostCategorieListSuccess, (state, action) => {
    return {
      ...state,
      postCategories: action.postCategorie

    };
  }),
  on(getFontSettingsSuccess, (state, action) => {
    return {
      ...state,
      settings: action.settings
    };
  }),
  on(getCompanySettingsSuccess, (state, action) => {
    return {
      ...state,
      companySettings: action.CompanySettings
    };
  }),

);

export function reducer(state: settingsState | undefined, action: Action) {
  return SettingsReducer(state, action);
}