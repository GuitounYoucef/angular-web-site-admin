import { Injectable } from "@angular/core";
import { ISettingsRepository } from "../../Settings.Domain/Settings.IRepository/ISettingsRepository";
import { HttpService } from "src/app/Modules/Core/API/HttpService";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { PostCategorie, FontSettings } from "../../Settings.Domain/Settings.Models/Settings";
import { environment } from "src/environements/environement";
import { HttpRequestMethod } from "src/app/Modules/Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "src/app/Modules/Core/API/ApiResponse";
import { Company } from "../../Settings.Domain/Settings.Models/company";


@Injectable()
export class SettingsRepository extends ISettingsRepository{

constructor(private httpService: HttpService,
            private httpClient: HttpClient) {
            super();
} 

getFontSettings(): Observable<FontSettings>{
    const requestURL = `${environment.apiURL}/font-settings`;
    const options = this.httpService.createOptions(
      HttpRequestMethod.get,
     // this.httpService.createHeader(),
      requestURL,
      null,
      false
    );
    return this.httpService.execute(options).pipe(
        map((item) => {
        let res = item as SuccessApiResponse<FontSettings>;
        return res.results;
      })
    );
}


updateFontSettings(fontSettings:FontSettings): Observable<object>{
    const requestURL = `${environment.apiURL}/update-font-settings`;
    const options = this.httpService.createOptions(
      HttpRequestMethod.put,
    //  this.httpService.createHeader(),
      requestURL,
      fontSettings,
      false
    );
    return this.httpService.execute(options).pipe(
        map((item) => {
        let res = item as SuccessApiResponse<FontSettings>;
        return res.results;
      })
    );
}

getCompanySettings(): Observable<Company>{
  const requestURL = `${environment.apiURL}/company`;
  const options = this.httpService.createOptions(
    HttpRequestMethod.get,
   // this.httpService.createHeader(),
    requestURL,
    null,
    false
  );
  return this.httpService.execute(options).pipe(
      map((item) => {
      let res = item as SuccessApiResponse<Company>;
      return res.results;
    })
  );
}


updateCompanySettings(company:Company): Observable<object>{
  const requestURL = `${environment.apiURL}/update-company`;
  const options = this.httpService.createOptions(
    HttpRequestMethod.put,
  //  this.httpService.createHeader(),
    requestURL,
    company,
    false
  );
  return this.httpService.execute(options).pipe(
      map((item) => {
      let res = item as SuccessApiResponse<Company>;
      return res.results;
    })
  );
}


getPostCategorie(): Observable<PostCategorie[]>{
  const requestURL = `${environment.apiURL}/get-postcatg`;
  const options = this.httpService.createOptions(
    HttpRequestMethod.get,
   // this.httpService.createHeader(),
    requestURL,
    null,
    false
  );
  return this.httpService.execute(options).pipe(
      map((item) => {
      let res = item as SuccessApiResponse<PostCategorie[]>;
      return res.results;
    })
  );
}

 createPostCategorie(postCategorie:PostCategorie): Observable<object>{
    const requestURL = `${environment.apiURL}/save-postcatg`;
    const options = this.httpService.createOptions(
      HttpRequestMethod.post,
    //  this.httpService.createHeader(),
      requestURL,
      postCategorie,
      false
    );
    return this.httpService.execute(options).pipe(
        map((item) => {
        let res = item as SuccessApiResponse<PostCategorie>;
        return res.results;
      })
    );
 }

 updatePostCategorie(postCategorie:PostCategorie): Observable<object>{
  const requestURL = `${environment.apiURL}/update-postcatg`;
  const options = this.httpService.createOptions(
    HttpRequestMethod.put,
  //  this.httpService.createHeader(),
    requestURL,
    postCategorie,
    false
  );
  return this.httpService.execute(options).pipe(
      map((item) => {
      let res = item as SuccessApiResponse<PostCategorie>;
      return res.results;
    })
  );
}
}