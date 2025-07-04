import { Observable } from "rxjs";
import { CardPost, Post } from "../Posts.Models/Posts";
import { UrlImage } from "../Posts.Models/UrlImage";

export abstract class IPostsRepository {

    abstract getCardsPostListByCategorie(page:Number, categorie:string): Observable<CardPost[]>

    abstract getDeletedCardsPostList(): Observable<CardPost[]>
  
    abstract createPost(post:Post): Observable<object>;
  
    abstract getPostById(id:number): Observable<Post>;

    abstract UpdatePost(post:Post): Observable<object>; 
  
    abstract deletePost(postID:number): Observable<number>;

    abstract restorePost(postID:number): Observable<number>;
  
    //abstract uploadImage(image :FormData): Observable<string[]>;
    abstract uploadImage(image :FormData): Observable<UrlImage>;

}