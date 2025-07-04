import { Injectable } from "@angular/core";
import { Observable, map, pluck } from "rxjs";
import { HttpService } from "src/app/Modules/Core/API/HttpService";
import { HttpRequestMethod } from "src/app/Modules/Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "src/app/Modules/Core/API/ApiResponse";
import { environment } from "src/environements/environement";

import { IUserRepository } from "../../User.Domain/User.IRepository/IUserRepository";
import {   User } from "../../User.Domain/User.Models/User";

@Injectable()
export class UserRepository extends IUserRepository {

    constructor(private httpService: HttpService) 
    {
        super();
    } 

    getUsersList(): Observable<User[]>
    {
        const requestURL = `${environment.apiURL}/users/all`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
            let res = item as SuccessApiResponse<User[]>;
            return res.results;
          })
        );
    }

 
  
    createUser(user:User): Observable<object>{
        const requestURL = `${environment.apiURL}/users/saveuser`;
        //return this.httpClient.user<any>(requestURL, user);
         console.log("Repository : user requestURL ",requestURL)
        const options = this.httpService.createOptions(
          HttpRequestMethod.post,
      //    this.httpService.createHeader(),
          requestURL,
          user,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<User>;
            return res.results;
          })
        );        
      
    }
  

    UpdateUser(user:User): Observable<object>{
        const requestURL = `${environment.apiURL}/users/updateuser`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.put,
  //        this.httpService.createHeader(),
          requestURL,
          user,
          false
        );
        return this.httpService.execute(options).pipe(
          pluck('results'),
          map((item) => {
            let res = item as SuccessApiResponse<User>;
            return res.results;
          })
        );  
    }    
  



}