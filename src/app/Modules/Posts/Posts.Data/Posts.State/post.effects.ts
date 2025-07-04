import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deletePost, deletePostFailed, deletePostSuccess, getDeletedPostsList, getDeletedPostsListFailed, getDeletedPostsListSuccess, getPost, getPostFailed, getPostSuccess, getPostsList, getPostsListFailed, getPostsListSuccess, restorePost, restorePostFailed, restorePostSuccess, savePost, savePostFailed, savePostSuccess, updatePost, updatePostFailed, updatePostSuccess } from "./posts.actions";


import { catchError, exhaustMap, map, pipe, tap, of, switchMap } from "rxjs";
import { IPostsRepository } from "../../Posts.Domain/Posts.IRepository/IPostsRepository";
import { Router } from "@angular/router";
import { Location } from '@angular/common';



@Injectable()
export class PostEffets {
    constructor(
        private actions$: Actions,
        private postRpository: IPostsRepository,
        private router: Router,
        private location: Location) {

    }

    loadPostsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPostsList),
            exhaustMap((action) => {
                return this.postRpository.getCardsPostListByCategorie(action.page, action.categorie).pipe(
                    map((cardsPostList) => {
                        console.log("getCardsPostList : ", cardsPostList);
                        return getPostsListSuccess({ cardsPostList });
                    }),
                    catchError(err => { return of(getPostsListFailed()) }),

                )
            })
        )
    });

    loadDeletedPostsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getDeletedPostsList),
            exhaustMap((action) => {
                return this.postRpository.getDeletedCardsPostList().pipe(
                    map((cardsPostList) => {
                        return getDeletedPostsListSuccess({ cardsPostList });
                    }),
                    catchError(err => { return of(getDeletedPostsListFailed()) }),

                )
            })
        )
    });



    loadPostById$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPost),
            exhaustMap((action) => {
                return this.postRpository.getPostById(action.id).pipe(
                    map((post) => {
                        console.log("getPostById : ", post);
                        return getPostSuccess({ post });
                    }),
                    catchError(err => { return of(getPostFailed()) }),

                )
            })
        )
    });



    restorePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(restorePost),
            exhaustMap((action) => {
                return this.postRpository.restorePost(action.id).pipe(
                    map((message) => {
                        return getDeletedPostsList();
                        //return restorePostSuccess({ message:"post deleted" });
                    }),
                    catchError(err => { return of(restorePostFailed()) }),

                )
            })
        )
    });

 





    savePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(savePost),
            exhaustMap((action) => {
                return this.postRpository.createPost(action.post).pipe(
                    map((respense) => {
                        let message = "save Post Success"
                        this.location.back();
                        return savePostSuccess({ message });
                    })
                    ,
                    catchError(err => { return of(savePostFailed()) }),
                )
            })
        )
    });


    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            exhaustMap((action) => {
                return this.postRpository.UpdatePost(action.post).pipe(
                    map((respense) => {
                        let message = "update Post Success"
                        this.location.back();
                        return updatePostSuccess({ message });
                    })
                    ,
                    catchError(err => { return of(updatePostFailed()) }),
                )
            })
        )
    });




}