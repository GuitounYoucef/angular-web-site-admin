import { Routes } from "@angular/router";
import { authGuard } from "./Modules/Core/guards/auth.guard";

const mainRoutes = () => import('./Modules/main.routes').then(route => route.MAIN_ROUTES);

export const APP_ROUTES: Routes = [
  {
    path: 'auth/login',
    loadComponent: () => import('./Modules/Auth/Auth.Presentation/login/login.component').then(component => component.LoginComponent),
  },
  {
    path: 'main',
     loadChildren: mainRoutes,
    canActivate: [authGuard] 
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];