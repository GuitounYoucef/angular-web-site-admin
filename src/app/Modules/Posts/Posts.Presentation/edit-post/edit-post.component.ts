
import { Component,  OnInit,} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Post } from '../../Posts.Domain/Posts.Models/Posts';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { AppState,  } from 'src/app/Modules/Core/state/app.state';
import { Store, } from '@ngrx/store';
import { getPost,  } from '../../Posts.Data/Posts.State/posts.actions';


import { selectEditingPost } from '../../Posts.Data/Posts.State/post.selectors';
import { ActivatedRoute, Router } from '@angular/router';


import { PostDataComponent } from '../post-data/post-data.component';
import { PostsViewModel } from '../Posts.ViewModels/PostsViewModel';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  standalone: true,
  imports: [

  FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule,PostDataComponent],
})
export class EditPostComponent implements OnInit {

  id!:number;

  constructor(
              private postsViewModel:PostsViewModel,
              private activaterouter:ActivatedRoute
               ) {
               }

  ngOnInit() {
     this.id=this.activaterouter.snapshot.params['id'] ;
     this.postsViewModel.getPostById(this.id);
  }


   
  
}
