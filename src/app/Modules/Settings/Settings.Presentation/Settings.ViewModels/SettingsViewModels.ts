import { Store } from "@ngrx/store";
import { settingsState } from "../../Settings.Data/Settings.State/settings.reducer";
import { getCompanySettings, getPostCategorieList, getFontSettings, updateFontSetting, savePostCategorie, updatePostCategorie, updateCompanySetting } from "../../Settings.Data/Settings.State/settings.actions";
import { Injectable } from "@angular/core";
import { FontSettings, PostCategorie } from "../../Settings.Domain/Settings.Models/Settings";
import { Company } from "../../Settings.Domain/Settings.Models/company";


@Injectable({providedIn:"root"})
export class SettingsViewModels{

constructor(private store: Store<settingsState>,
                ) {}

initSettings(){
    this.store.dispatch(getFontSettings());   
    this.store.dispatch(getPostCategorieList()); 
    this.store.dispatch(getCompanySettings());
}

updateFontSettings(fontSettings:FontSettings)
{
   this.store.dispatch(updateFontSetting({fontSettings:fontSettings}));
}

addPostCategorie(postCategorie:PostCategorie){
    this.store.dispatch(savePostCategorie({postCategorie:postCategorie}));

}

updatePostCategorie(postCategorie:PostCategorie){
    this.store.dispatch(updatePostCategorie({postCategorie:postCategorie}));

}

updateCompany(company:Company){
    this.store.dispatch(updateCompanySetting({companySetting:company}));

}
}