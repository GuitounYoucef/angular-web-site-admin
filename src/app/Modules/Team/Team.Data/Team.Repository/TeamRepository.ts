import { Injectable } from "@angular/core";
import { Observable, map, pluck } from "rxjs";
import { HttpService } from "src/app/Modules/Core/API/HttpService";
import { HttpRequestMethod } from "src/app/Modules/Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "src/app/Modules/Core/API/ApiResponse";
import { environment } from "src/environements/environement";

import { ITeamRepository } from "../../Team.Domain/Team.IRepository/ITeamRepository";
import {  TeamMember } from "../../Team.Domain/Team.Models/Team";
import { UrlImage } from "../../Team.Domain/Team.Models/UrlImage";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TeamRepository extends ITeamRepository {

    constructor(private httpService: HttpService,
                private httpClient: HttpClient) 
    {
        super();
    } 

    getTeamsList(): Observable<TeamMember[]>
    {
        const requestURL = `${environment.apiURL}/all-team`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
            let res = item as SuccessApiResponse<TeamMember[]>;
            return res.results;
          })
        );
    }

 
  
    createTeamMember(team:TeamMember): Observable<object>{
        const requestURL = `${environment.apiURL}/save-team-member`;
        //return this.httpClient.team<any>(requestURL, team);
         console.log("Repository : team requestURL ",requestURL)
        const options = this.httpService.createOptions(
          HttpRequestMethod.post,
      //    this.httpService.createHeader(),
          requestURL,
          team,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<TeamMember>;
            return res.results;
          })
        );        
      
    }
  
    getTeamMemberById(id:number): Observable<TeamMember>{
        const requestURL = `${environment.apiURL}/teams/${id}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
  //        this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<TeamMember>;
            return res.results;
          })
        );
    }
    UpdateTeamMember(team:TeamMember): Observable<object>{
        const requestURL = `${environment.apiURL}/update-team-member`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.put,
  //        this.httpService.createHeader(),
          requestURL,
          team,
          false
        );
        return this.httpService.execute(options).pipe(
          pluck('results'),
          map((item) => {
            let res = item as SuccessApiResponse<TeamMember>;
            return res.results;
          })
        );  
    }    
  
    deleteTeamMember(TeamMemberID:number): Observable<any>{
        const requestURL = `${environment.apiURL}/delete-team-member/${TeamMemberID}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.delete,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
          pluck('results'),
          map((item) => {
            let res = item as SuccessApiResponse<TeamMember>;
            return res.results;
          })
        );
    } 

    

    restoreTeamMember(TeamMemberID:number): Observable<any>{
      const requestURL = `${environment.apiURL}/restore-team-member/${TeamMemberID}`;
      const options = this.httpService.createOptions(
        HttpRequestMethod.put,
 //       this.httpService.createHeader(),
        requestURL,
        null,
        false
      );
      return this.httpService.execute(options).pipe(
        pluck('results'),
        map((item) => {
          let res = item as SuccessApiResponse<TeamMember>;
          return res.results;
        })
      );
  } 

    uploadImage(image :FormData): Observable<UrlImage>
    {
      return this.httpClient.post<UrlImage>(`${environment.imageServiceURL}/uploadImage`,image);
   
    }


}