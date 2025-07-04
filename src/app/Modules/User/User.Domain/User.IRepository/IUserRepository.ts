
import { Observable} from "rxjs";
import {  User } from "../User.Models/User";

export abstract class IUserRepository {

    abstract getUsersList(): Observable<User[]>
 
    abstract createUser(user:User): Observable<object>
  
    abstract UpdateUser(user:User): Observable<object>
  
   
}