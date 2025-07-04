import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PostCardComponent } from '../post-card/post-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostsViewModel } from '../Posts.ViewModels/PostsViewModel';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, PostCardComponent, MatGridListModule]
})
export class ListPostsComponent implements OnInit {

  deleted: boolean = false;
  currentPage = 1;

  postList$ = this.postsViewModel.postList$;
  deletedPostList$ = this.postsViewModel.deletedPostsList$;
  settings$ = this.postsViewModel.settings$;
  

  constructor(private postsViewModel: PostsViewModel,
    private router: Router,
  ) {
    console.log("this.router.url :",this.router.url)
    if (this.router.url === "/main/posts/deleted") {
      console.log("posts/deleted route")
      this.postsViewModel.getDeletedPostsList();
      this.deleted = true;
    }
    else this.postsViewModel.getPostsList(this.currentPage);

  }

  ngOnInit() {
    this.postsViewModel.getSettings()



  }



}
