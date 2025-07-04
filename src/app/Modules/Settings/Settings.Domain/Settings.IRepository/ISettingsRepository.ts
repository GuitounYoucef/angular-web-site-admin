import { Observable } from "rxjs";
import { PostCategorie, FontSettings } from "../Settings.Models/Settings";
import { Company } from "../Settings.Models/company";

export abstract class ISettingsRepository {

    abstract getFontSettings(): Observable<FontSettings>;
    abstract updateFontSettings(settings:FontSettings): Observable<object>;

    abstract getCompanySettings(): Observable<Company>;
    abstract updateCompanySettings(company:Company): Observable<object>;    

    abstract getPostCategorie(): Observable<PostCategorie[]>;
    abstract createPostCategorie(postCategorie:PostCategorie): Observable<object>;
    abstract updatePostCategorie(postCategorie:PostCategorie): Observable<object>;

}