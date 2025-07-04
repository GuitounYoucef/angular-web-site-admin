
import { Observable} from "rxjs";
import { LoginCredentialsRequest, LoginCredentialsResponse, RoleResponse } from "../Auth.Models/Auth";
import { PasswordUpdate } from "../Auth.Models/passwordUpdate";


export abstract class IAuthRepository {

    abstract LoginWithCredentials(credential: LoginCredentialsRequest): Observable<LoginCredentialsResponse>;

    abstract getUserRole(userName:string): Observable<RoleResponse>;

    abstract updatePassword(passwordUpdate:PasswordUpdate): Observable<PasswordUpdate>;
 

}