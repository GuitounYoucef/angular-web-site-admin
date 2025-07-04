import { Inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IAuthRepository } from '../Auth.IRepository/IAuthRepository';
import { LoginCredentialsRequest, LoginCredentialsResponse } from '../Auth.Models/Auth';
import { LocalSorageService } from 'src/app/Modules/Core/Services/localSrorage/LocalStorage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginWithCredentialsUseCase
{
  constructor(
    private authRepository: IAuthRepository,
    private tokenStorgeService: LocalSorageService,

  ) {}

  async execute(request: LoginCredentialsRequest): Promise<LoginCredentialsResponse> {
    const credential = await lastValueFrom(
      this.authRepository.LoginWithCredentials(request)
    );
    this.tokenStorgeService.saveToken(credential.authenticationToken)
    this.tokenStorgeService.saveUserName(credential.username);
        //this.tokenStorgeService.saveRefreshToken(credential.results.refreshToken)

    return credential;
  }
}
