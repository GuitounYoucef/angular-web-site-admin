import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthState } from "../../Auth.Data/Auth.State/auth.reducer";
import { selectCurrentUserState, selectLoadingState, selectLoginState } from "../../Auth.Data/Auth.State/auth.selectors";
import { LoginCredentialsRequest } from "../../Auth.Domain/Auth.Models/Auth";
import { getUserRole, loginAction, updatePassword } from "../../Auth.Data/Auth.State/auth.actions";
import { LocalSorageService } from "src/app/Modules/Core/Services/localSrorage/LocalStorage.service";
import { Router } from "@angular/router";
import { PasswordUpdate } from "../../Auth.Domain/Auth.Models/passwordUpdate";

@Injectable({providedIn:"root"})
export class AuthViewModel {

  readonly authState$ = this.store.select(selectLoginState);
  readonly currentUser$ = this.store.select(selectCurrentUserState);
  readonly Loading$ = this.store.select(selectLoadingState);
  

  constructor(
    private store: Store<AuthState>,
    private localSorageService:LocalSorageService,
    private router:Router,
) { }


    loginWithCredential(username: string, password: string): void {
      let data: LoginCredentialsRequest = { username: username, password: password };
      this.store.dispatch(loginAction({ credential: data }));
    }

    getUserRole()
    {
      let user=this.localSorageService.getUserName();
      this.store.dispatch(getUserRole({userName:user!}));
    }

    Logout(): void{
      this.localSorageService.clear();
      this.router.navigate(['auth/login']);
    }
    updatePassword(passwordUpdate:PasswordUpdate){
      this.store.dispatch(updatePassword({passwordUpdate:passwordUpdate}));
      
    }

  




    




}  