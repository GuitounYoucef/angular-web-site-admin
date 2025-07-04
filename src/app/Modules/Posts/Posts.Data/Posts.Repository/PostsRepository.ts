import { Injectable } from "@angular/core";
import { IPostsRepository } from "../../Posts.Domain/Posts.IRepository/IPostsRepository";
import { Observable, map, pluck } from "rxjs";
import { CardPost, Post } from "../../Posts.Domain/Posts.Models/Posts";
import { HttpService } from "../../../Core/API/HttpService";


import { HttpRequestMethod } from "../../../Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "../../../Core/API/ApiResponse";

import { UrlImage } from "../../Posts.Domain/Posts.Models/UrlImage";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environements/environement";
import { Page } from "../../Posts.Domain/Posts.Models/Page";

@Injectable()
export class PostsRepository extends IPostsRepository {


    constructor(private httpService: HttpService,
                private httpClient: HttpClient) {
        super();
    } 



     getCardsPostListByCategorie(page:Number, categorie:string)
    {
        const requestURL = `${environment.apiURL}/admin-cards-post-bycatg/${page}/${categorie}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
            let res = item as SuccessApiResponse<CardPost[]>;
            return res.results;
          })
        );
    } 

    getDeletedCardsPostList(): Observable<CardPost[]>
    {
        const requestURL = `${environment.apiURL}/deleted-cards-post`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
            let res = item as SuccessApiResponse<Post[]>;
            return res.results;
          })
        );
    }    
      
  
    createPost(post:Post): Observable<object>{
        const requestURL = `${environment.apiURL}/posts`;
         console.log("Repository : post requestURL ",requestURL)
        const options = this.httpService.createOptions(
          HttpRequestMethod.post,
  //        this.httpService.createHeader(),
          requestURL,
          post,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<Post>;
            return res.results;
          })
        );        
      
    }
  
    getPostById(id:number): Observable<Post>{
        const requestURL = `${environment.apiURL}/get-posts/${id}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<Post>;
            return res.results;
          })
        );
    }
    UpdatePost(post:Post): Observable<object>{
        const requestURL = `${environment.apiURL}/posts`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.put,
 //         this.httpService.createHeader(),
          requestURL,
          post,
          false
        );
        return this.httpService.execute(options).pipe(
          pluck('results'),
          map((item) => {
            let res = item as SuccessApiResponse<Post>;
            return res.results;
          })
        );  
    }    
  
    deletePost(postID:number): Observable<any>{
        const requestURL = `${environment.apiURL}/posts/${postID}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.delete,
 //         this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
           map((item) => {
            let res = item as SuccessApiResponse<Post>;
            return res.results;
          })
        );
    } 

    restorePost(postID:number): Observable<any>{
      const requestURL = `${environment.apiURL}/posts/restore/${postID}`;
      const options = this.httpService.createOptions(
        HttpRequestMethod.post,
//         this.httpService.createHeader(),
        requestURL,
        null,
        false
      );
      return this.httpService.execute(options).pipe(
        map((item) => {
          let res = item as SuccessApiResponse<Post>;
          return res.results;
        })
      );
  } 

/*     uploadImage(image :FormData): Observable<string[]>{
      const requestURL = `${environment.apiURL}/uploadFile2`;
      console.log("Repository : requestURL ",requestURL)
      const options = this.httpService.createOptions(
        HttpRequestMethod.post,
     //   this.httpService.createHeader(),
        requestURL,
        image,
        false,
        null,
        true
      );
      return this.httpService.upload(options).pipe(
        
        map((item) => {
          
          let res = item as SuccessApiResponse<string[]>;
          console.log("Repository : Image upload respense", item)
          return res.results;
        })
      );
      
    } */
    uploadImage(image :FormData): Observable<UrlImage>
    {
      return this.httpClient.post<UrlImage>(`${environment.imageServiceURL}/uploadImage`,image);
   
    }
  
/*     getImage(imageUrl: string): Observable<Blob> {
      return this.httpClient.get(imageUrl, { responseType: 'blob' });
    } */
}