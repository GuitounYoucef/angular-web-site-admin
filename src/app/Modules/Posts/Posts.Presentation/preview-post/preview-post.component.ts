import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../Posts.Domain/Posts.Models/Posts';
import { CommonModule } from '@angular/common';
import { PostsViewModel } from '../Posts.ViewModels/PostsViewModel';


@Component({
    //  encapsulation: ViewEncapsulation.Emulated,
    selector: 'app-preview-post',
    templateUrl: './preview-post.component.html',
    styleUrls: ['./preview-post.component.css'],
    imports: [CommonModule,]
})
export class PreviewPostComponent implements OnInit {

  post:Post=new Post();

  settings$=this.postsViewModel.settings$; 
  id? :number;
  post$=this.postsViewModel.editingPost$.subscribe(   
    data =>{
      let stat=document.querySelector('.statement');
      stat!.innerHTML=data?.statement!;
      this.post=data!
     } 
  )



  constructor(
              private postsViewModel:PostsViewModel,
              private activaterouter:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id'] ;
    this.postsViewModel.getPostById(this.id!);
    this.postsViewModel.getSettings();

  }





}
