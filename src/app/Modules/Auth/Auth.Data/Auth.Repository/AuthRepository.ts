import { Injectable } from "@angular/core";
import { Observable, map, pluck } from "rxjs";
import { HttpService } from "src/app/Modules/Core/API/HttpService";
import { HttpRequestMethod } from "src/app/Modules/Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "src/app/Modules/Core/API/ApiResponse";
import { environment } from "src/environements/environement";
import { HttpClient } from "@angular/common/http";

import { IAuthRepository } from "../../Auth.Domain/Auth.IRepository/IAuthRepository";
import { LoginCredentialsRequest, LoginCredentialsResponse, RoleResponse } from "../../Auth.Domain/Auth.Models/Auth";
import { Router } from "@angular/router";
import { LocalSorageService } from "src/app/Modules/Core/Services/localSrorage/LocalStorage.service";
import { PasswordUpdate } from "../../Auth.Domain/Auth.Models/passwordUpdate";


@Injectable()
export class AuthRepository extends IAuthRepository {

  constructor(private httpService: HttpService,

             ) {
    super();
  }

  LoginWithCredentials(credential: LoginCredentialsRequest): Observable<LoginCredentialsResponse> {
    const requestURL = `${environment.apiURL}/auth/login`;
    const options = this.httpService.createOptions(
      HttpRequestMethod.post,
      //      this.httpService.createHeader(),
      requestURL,
      credential,
      false
    );
    return this.httpService.execute(options).pipe(
      map((item) => {
        let res = item as SuccessApiResponse<LoginCredentialsResponse>;
        return res.results;
      })
    );
  }



  getUserRole(userName:string): Observable<RoleResponse>{
    const requestURL = `${environment.apiURL}/roles/get-role/${userName}`;
    const options = this.httpService.createOptions(
      HttpRequestMethod.get,
      //      this.httpService.createHeader(),
      requestURL,
      null,
      false
    );
    return this.httpService.execute(options).pipe(
      map((item) => {
        let res = item as SuccessApiResponse<RoleResponse>;
        return res.results;
      })
    );
  }

  updatePassword(passwordUpdate:PasswordUpdate): Observable<PasswordUpdate>
  {
    const requestURL = `${environment.apiURL}/users/updatepassword`;
    const options = this.httpService.createOptions(
      HttpRequestMethod.put,
      //      this.httpService.createHeader(),
      requestURL,
      passwordUpdate,
      false
    );
    return this.httpService.execute(options).pipe(
      map((item) => {
        let res = item as SuccessApiResponse<PasswordUpdate>;
        return res.results;
      })
    );
  }


}