import { Routes } from "@angular/router";
import { MainComponent } from "./Core/Main.component";
import { authGuard } from "./Core/guards/auth.guard";
import { AdminGuard } from "./Core/guards/admin.guard";
const postsRoutes = () => import('./Posts/posts.routes').then(x => x.POSTS_ROUTES);
const messagesRoutes = () => import('./Message/messages.routes').then(x => x.MESSAGES_ROUTES);


export const MAIN_ROUTES: Routes = [
    {
     path: '',
    component: MainComponent,
    children: [
    {
        path: 'posts', 
        loadChildren: postsRoutes,
        //canActivate: [authGuard] 
    },
    {
        path: 'settings',
        loadComponent: () => import('./Settings/Settings.Presentation/edit-settings/edit-settings.component').then(m => m.EditSettingsComponent),
        canActivate: [AdminGuard] 
    },

    {
        path: 'statistics',
        loadComponent: () => import('./Satistics/Statistics.Presentation/statistics-data.component').then(m => m.StatisticsDataComponent)
    }
    ,

    {
        path: 'messages',
        loadChildren: messagesRoutes,
        //loadComponent: () => import('./Message/Message.Presentation/message-view/message.component').then(m => m.MessageComponent)
        //canActivate: [authGuard] 
    },
    {
        path: 'notifications',
        loadComponent: () => import('./Notifications/notifications-data/notifications-data.component').then(m => m.NotificationsDataComponent)
        //canActivate: [authGuard] 
    },
    {
        path: 'users',
        loadComponent: () => import('./User/User.Presentation/user-view/user.component').then(m => m.UserComponent),
        canActivate: [AdminGuard]
    },
    {
        path: 'team',
        loadComponent: () => import('./Team/Team.Presentation/team-view/team.component').then(m => m.TeamComponent)
        //canActivate: [authGuard] 
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'posts' }
]
    }
];