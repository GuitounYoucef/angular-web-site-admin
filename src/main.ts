import { IUserRepository } from './app/Modules/User/User.Domain/User.IRepository/IUserRepository';
import { UserRepository } from './app/Modules/User/User.Data/User.Repository/UserRepository';
import { ITeamRepository } from './app/Modules/Team/Team.Domain/Team.IRepository/ITeamRepository';
import { TeamRepository } from './app/Modules/Team/Team.Data/Team.Repository/TeamRepository';



import { IAuthRepository } from './app/Modules/Auth/Auth.Domain/Auth.IRepository/IAuthRepository';
import { AuthRepository } from './app/Modules/Auth/Auth.Data/Auth.Repository/AuthRepository';


import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { appEffects, appReducer } from './app/Modules/Core/state/app.state';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IPostsRepository } from './app/Modules/Posts/Posts.Domain/Posts.IRepository/IPostsRepository';
import { PostsRepository } from './app/Modules/Posts/Posts.Data/Posts.Repository/PostsRepository';
import { ISettingsRepository } from './app/Modules/Settings/Settings.Domain/Settings.IRepository/ISettingsRepository';
import { SettingsRepository } from './app/Modules/Settings/Settings.Data/Settings.Repository/SettingsRepository';
import { IStatisticsRepository } from './app/Modules/Satistics/Statistics.Domain/Statistics.IRepository/IStatisticsRepository';
import { StatisticsRepository } from './app/Modules/Satistics/Statistics.Data/Statistics.Repository/StatisticsRepository';
import { HttpClientInterceptor } from './app/Modules/Core/API/HttpClientInterceptor';
import { IMessageRepository } from './app/Modules/Message/Message.Domain/Message.IRepository/IMessageRepository';
import { MessageRepository } from './app/Modules/Message/Message.Data/Message.Repository/MessageRepository';
import { MatSnackBarModule } from '@angular/material/snack-bar';




export const CANCEL_API_REQUESTS = "CANCEL_API_REQUESTS"


bootstrapApplication(AppComponent, {
    providers: [
{ provide: IUserRepository, useClass: UserRepository },
{ provide: ITeamRepository, useClass: TeamRepository },




    importProvidersFrom(BrowserModule, HttpClientModule, MatSnackBarModule),
    provideRouter(APP_ROUTES),
    provideAnimations(),
    provideStore(appReducer),
    provideEffects(appEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
    { provide: IAuthRepository, useClass: AuthRepository },
    { provide: IPostsRepository, useClass: PostsRepository },
    { provide: ISettingsRepository, useClass: SettingsRepository },
    { provide: IStatisticsRepository, useClass: StatisticsRepository },
    { provide: IMessageRepository, useClass: MessageRepository },
     
 
    
    




  ]
})
  .catch(err => console.error(err));
