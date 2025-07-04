import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { postsState } from "../../Posts.Data/Posts.State/post.reducer";
import { selectDeletedPostsList, selectEditingPost, selectPostsList } from "../../Posts.Data/Posts.State/post.selectors";
import { selectPostCategories, selectSettings } from "src/app/Modules/Settings/Settings.Data/Settings.State/settings.selectors";
import { getPostCategorieList, getFontSettings } from "src/app/Modules/Settings/Settings.Data/Settings.State/settings.actions";
import { Post } from "../../Posts.Domain/Posts.Models/Posts";
import { deletePost, getDeletedPostsList, getPost, getPostsList, restorePost, savePost, updatePost } from "../../Posts.Data/Posts.State/posts.actions";

@Injectable({providedIn:"root"})
export class PostsViewModel {

    readonly postList$ = this.store.select(selectPostsList);
    readonly deletedPostsList$ = this.store.select(selectDeletedPostsList); 
    readonly settings$ = this.store.select(selectSettings);
    readonly postCategories$ = this.store.select(selectPostCategories);
    readonly editingPost$ = this.store.select(selectEditingPost);


    constructor(
        private store: Store<postsState>,
    ) { }

    getSettings() {
        this.store.dispatch(getFontSettings());

    }

    getPostById(id: number) {
        this.store.dispatch(getPost({ id: id }))
    }

    deletePost(id: number) {
        this.store.dispatch(deletePost({ id: id }))
    }

    restorePost(id: number) {
        this.store.dispatch(restorePost({ id: id }))
    }


    getPostsList(page:number) {
        this.store.dispatch(getPostsList({page:page, categorie:"*"}));
    }

    getPostsListByCategorie(categorie:string) {
        this.store.dispatch(getPostsList({page:1, categorie:categorie}));
    }

    getDeletedPostsList() {
        this.store.dispatch(getDeletedPostsList());
    }



    getPostCategorieList() {
        this.store.dispatch(getPostCategorieList());
    }

    savePost(post: Post) {
        this.store.dispatch(savePost({ post: post }));
    }


    updatePost(post: Post) {
        this.store.dispatch(updatePost({ post: post }));

    }
    




}  