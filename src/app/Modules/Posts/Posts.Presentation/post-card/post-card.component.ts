import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CardPost, Post } from '../../Posts.Domain/Posts.Models/Posts';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Modules/Core/state/app.state';
import { editPost, getPost } from '../../Posts.Data/Posts.State/posts.actions';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsViewModel } from '../Posts.ViewModels/PostsViewModel';
import { AuthViewModel } from 'src/app/Modules/Auth/Auth.Presentation/Auth.ViewModels/AuthViewModel';


@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css'],
    imports: [FormsModule, CommonModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class PostCardComponent implements OnInit {

  @Input() post: CardPost;
  @Input() textAlign: string;
  @Input() fontFamily: string;
  @Input() fontSizeTitle: number;
  @Input() fontSizeParagraph: number;
  @Input() deleted: boolean;

  readonly curentUser$ = this.authViewModel.currentUser$;
  
  constructor(
               private router: Router,
               private authViewModel:AuthViewModel,
               private postsViewModel:PostsViewModel
              ) { }

  ngOnInit() {
  }

  editPost(id:number)
  {   
         this.router.navigate(['main/posts/edit',id]);
  }

  previewPost(id:number)
  {
      
         this.router.navigate(['main/posts/preview',id]);

  }

  deletePost(id:number)
  {
    this.postsViewModel.deletePost(id);

  }
  restorePost(id:number)
  {
    this.postsViewModel.restorePost(id);

  }



}
