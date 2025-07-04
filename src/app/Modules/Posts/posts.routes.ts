import { Routes } from '@angular/router';
import { ListPostsComponent } from './Posts.Presentation/list-posts/list-posts.component';
import { AddPostComponent } from './Posts.Presentation/add-post/add-post.component';
import { EditPostComponent } from './Posts.Presentation/edit-post/edit-post.component';
import { PreviewPostComponent } from './Posts.Presentation/preview-post/preview-post.component';
import { PostViewComponent } from './Posts.Presentation/post-view/post-view.component';


export const POSTS_ROUTES: Routes = [
    {
        path: '',
        component: PostViewComponent,
        children: [
            { path: '', component: ListPostsComponent },
            { path: 'deleted', component: ListPostsComponent },
            {
                path: 'add',
                loadComponent: () => import('./Posts.Presentation/add-post/add-post.component').then(m => m.AddPostComponent)
            },
            { path: 'edit/:id', component: EditPostComponent },
            { path: 'preview/:id', component: PreviewPostComponent }
        ]
    }

];