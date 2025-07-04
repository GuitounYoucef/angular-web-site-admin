export interface LoginCredentialsRequest {
  username: string;
  password: string;
}

export class LoginCredentialsResponse {
/*   results: {
    refreshToken: string;
    token: string;
  }; */

  
    authenticationToken:string;
    username: string;
    role: string;

}

export class RoleResponse {
      username: string;
      role: string;
  
  }