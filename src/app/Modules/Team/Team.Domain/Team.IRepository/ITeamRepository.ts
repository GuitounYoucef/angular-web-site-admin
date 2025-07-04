
import { Observable} from "rxjs";
import {  TeamMember } from "../Team.Models/Team";
import { UrlImage } from "../Team.Models/UrlImage";

export abstract class ITeamRepository {

    abstract getTeamsList(): Observable<TeamMember[]>
 
    abstract createTeamMember(team:TeamMember): Observable<object>
  
    abstract getTeamMemberById(id:number): Observable<TeamMember>

    abstract UpdateTeamMember(team:TeamMember): Observable<object>
  
    abstract deleteTeamMember(TeamID:number): Observable<any>

    abstract restoreTeamMember(TeamID:number): Observable<any>

   
    
    abstract uploadImage(image :FormData): Observable<UrlImage>;
}