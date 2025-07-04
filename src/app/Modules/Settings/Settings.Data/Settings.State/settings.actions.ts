import { createAction, props } from "@ngrx/store";
import {  FontSettings, PostCategorie } from "../../Settings.Domain/Settings.Models/Settings";
import { Company } from "../../Settings.Domain/Settings.Models/company";

/*---------------------------------------------------------------------------------------------------------------*/

export const GET_POST_CTEGORIE_LIST = "[settingCategorie list] get Posts Categories List"
export const GET_POST_CTEGORIE_LIST_SUCCESS = "[settingCategorie list] Posts Categories List success"
export const GET_POST_CTEGORIE_LIST_FAILED = "[settingCategorie list] get Posts Categories List failed"

export const getPostCategorieList = createAction(GET_POST_CTEGORIE_LIST);
export const getPostCategorieListSuccess = createAction(GET_POST_CTEGORIE_LIST_SUCCESS, props<{ postCategorie: PostCategorie[] }>());
export const getPostCategorieListFailed = createAction(GET_POST_CTEGORIE_LIST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const SAVE_POST_CTEGORIE = "[postCategorie] save Post Categorie"
export const SAVE_POST_CTEGORIE_SUCCESS = "[postCategorie] save Post Categorie success"
export const SAVE_POST_CTEGORIE_FAILED = "[postCategorie] save Post Categorie failed"

export const savePostCategorie = createAction(SAVE_POST_CTEGORIE, props<{ postCategorie: PostCategorie }>());
export const savePostCategorieSuccess = createAction(SAVE_POST_CTEGORIE_SUCCESS, props<{ message: string }>());
export const savePostCategorieFailed = createAction(SAVE_POST_CTEGORIE_FAILED);

/*---------------------------------------------------------------------------------------------------------------*/

export const UPDATE_POST_CTEGORIE = "[postCategorie] update Post Categorie"
export const UPDATE_POST_CTEGORIE_SUCCESS = "[postCategorie] update Post Categorie success"
export const UPDATE_POST_CTEGORIE_FAILED = "[postCategorie] update Post Categorie failed"

export const updatePostCategorie = createAction(UPDATE_POST_CTEGORIE, props<{ postCategorie: PostCategorie }>());
export const updatePostCategorieSuccess = createAction(UPDATE_POST_CTEGORIE_SUCCESS, props<{ message: string }>());
export const updatePostCategorieFailed = createAction(UPDATE_POST_CTEGORIE_FAILED);


/*---------------------------------------------------------------------------------------------------------------*/

export const GET_FONT_SETTING = "[settings] get Setting"
export const GET_FONT_SETTING_SUCCESS = "[settings] get Settings success"
export const GET_FONT_SETTING_FAILED = "[settings] get Settings failed"

export const getFontSettings = createAction(GET_FONT_SETTING);
export const getFontSettingsSuccess = createAction(GET_FONT_SETTING_SUCCESS, props<{ settings: FontSettings }>());
export const getFontSettingsFailed = createAction(GET_FONT_SETTING_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const UPDATE_FONT_SETTING = "[setting] update Setting"
export const UPDATE_FONT_SETTING_SUCCESS = "[settings] update Setting success"
export const UPDATE_FONT_SETTING_FAILED = "[settings] update Setting failed"

export const updateFontSetting = createAction(UPDATE_FONT_SETTING, props<{ fontSettings: FontSettings }>());
export const updateFontSettingSuccess = createAction(UPDATE_FONT_SETTING_SUCCESS, props<{ message: string }>());
export const updateFontSettingFailed = createAction(UPDATE_FONT_SETTING_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/
export const GET_COMPANY_SETTING = "[Company] get Company Setting"
export const GET_COMPANY_SETTING_SUCCESS = "[Company] get Company Settings success"
export const GET_COMPANY_SETTING_FAILED = "[Company] get Company Settings failed"

export const getCompanySettings = createAction(GET_COMPANY_SETTING);
export const getCompanySettingsSuccess = createAction(GET_COMPANY_SETTING_SUCCESS, props<{ CompanySettings: Company }>());
export const getCompanySettingsFailed = createAction(GET_COMPANY_SETTING_FAILED);

export const UPDATE_COMPANY_SETTING = "[Company] update Company Setting"
export const UPDATE_COMPANY_SETTING_SUCCESS = "[Company] update Company Setting success"
export const UPDATE_COMPANY_SETTING_FAILED = "[Company] update Company Setting failed"

export const updateCompanySetting = createAction(UPDATE_COMPANY_SETTING, props<{ companySetting: Company }>());
export const updateCompanySettingSuccess = createAction(UPDATE_COMPANY_SETTING_SUCCESS, props<{ message: string }>());
export const updateCompanySettingFailed = createAction(UPDATE_COMPANY_SETTING_FAILED);
