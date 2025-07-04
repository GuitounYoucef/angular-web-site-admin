import { Routes } from '@angular/router';

import { MessageComponent } from './Message.Presentation/message-view/message.component';


export const MESSAGES_ROUTES: Routes = [
    {
        path: '',
        component: MessageComponent,
        children: [
            { path: ':id', component: MessageComponent },

        ]
    }

];