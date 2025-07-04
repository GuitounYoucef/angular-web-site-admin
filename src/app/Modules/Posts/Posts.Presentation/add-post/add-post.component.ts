
import { Component,  OnInit,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { FormBuilder,} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { AppState,  } from 'src/app/Modules/Core/state/app.state';
import { Store, } from '@ngrx/store';

import { IPostsRepository } from '../../Posts.Domain/Posts.IRepository/IPostsRepository';

import { selectEditingPost } from '../../Posts.Data/Posts.State/post.selectors';
import { PostDataComponent } from '../post-data/post-data.component';
import { PostsViewModel } from '../Posts.ViewModels/PostsViewModel';


@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css'],
    imports: [
        FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, PostDataComponent
    ]
})

export class AddPostComponent implements OnInit {


  

  postList$=this.postsViewModel.postList$;

  constructor(private postsViewModel: PostsViewModel,

               ) { }

  ngOnInit() {
     
  }
 


}
