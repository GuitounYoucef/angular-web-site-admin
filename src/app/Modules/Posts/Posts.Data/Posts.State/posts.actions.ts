import { createAction, props } from "@ngrx/store";
import { CardPost, Post } from "../../Posts.Domain/Posts.Models/Posts";
import { Page } from "../../Posts.Domain/Posts.Models/Page";

/*---------------------------------------------------------------------------------------------------------------*/

export const GET_POSTS_LIST = "[posts list] get Posts List"
export const GET_POSTS_LIST_SUCCESS = "[posts list] get Posts List success"
export const GET_POSTS_LIST_FAILED = "[posts list] get Posts List failed"

export const getPostsList = createAction(GET_POSTS_LIST,props<{ page: Number, categorie:string }>());
export const getPostsListSuccess = createAction(GET_POSTS_LIST_SUCCESS, props<{ cardsPostList: CardPost[] }>());
export const getPostsListFailed = createAction(GET_POSTS_LIST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const GET_POSTS = "[post] get Post by id"
export const GET_POST_SUCCESS = "[posts] get Posts by id success"
export const GET_POST_FAILED = "[post] get Posts by id failed"

export const getPost = createAction(GET_POSTS, props<{ id:number }>());
export const getPostSuccess = createAction(GET_POST_SUCCESS, props<{ post: Post }>());
export const getPostFailed = createAction(GET_POST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const SAVE_POST = "[post] save Post"
export const SAVE_POST_SUCCESS = "[posts] save Post success"
export const SAVE_POST_FAILED = "[posts] save Post failed"

export const savePost = createAction(SAVE_POST, props<{ post: Post }>());
export const savePostSuccess = createAction(SAVE_POST_SUCCESS, props<{ message: string }>());
export const savePostFailed = createAction(SAVE_POST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const EDIT_POST = "[post] edit Post"
export const GET_EDITED_POST= "[posts] get edited Post"

export const editPost = createAction(EDIT_POST, props<{ post: Post }>());
export const getEditedPost = createAction(GET_EDITED_POST);
/*---------------------------------------------------------------------------------------------------------------*/


export const UPDATE_POST = "[post] update Post"
export const UPDATE_POST_SUCCESS = "[posts] update Post success"
export const UPDATE_POST_FAILED = "[posts] update Post failed"

export const updatePost = createAction(UPDATE_POST, props<{ post: Post }>());
export const updatePostSuccess = createAction(UPDATE_POST_SUCCESS, props<{ message: string }>());
export const updatePostFailed = createAction(UPDATE_POST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const GET_DELETED_POSTS_LIST = "[Deleted posts list] get Deleted Posts List"
export const GET_DELETED_POSTS_LIST_SUCCESS = "[Deleted posts list] get Deleted Posts List success"
export const GET_DELETED_POSTS_LIST_FAILED = "[Deleted posts list] get Deleted Posts List failed"

export const getDeletedPostsList = createAction(GET_DELETED_POSTS_LIST);
export const getDeletedPostsListSuccess = createAction(GET_DELETED_POSTS_LIST_SUCCESS, props<{ cardsPostList: CardPost[] }>());
export const getDeletedPostsListFailed = createAction(GET_DELETED_POSTS_LIST_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const DELETE_POSTS = "[post] delete Post"
export const DELETE_POST_SUCCESS = "[posts] delete Post success"
export const DELETE_POST_FAILED = "[post] delete Post failed"

export const deletePost = createAction(DELETE_POSTS, props<{ id:number }>());
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS, props<{ message: string }>());
export const deletePostFailed = createAction(DELETE_POST_FAILED);

export const RESTORE_POSTS = "[post] restore Post"
export const RESTORE_POST_SUCCESS = "[posts] restore Post success"
export const RESTORE_POST_FAILED = "[post] restore Post failed"

export const restorePost = createAction(RESTORE_POSTS, props<{ id:number }>());
export const restorePostSuccess = createAction(RESTORE_POST_SUCCESS, props<{ message: string }>());
export const restorePostFailed = createAction(RESTORE_POST_FAILED);

/* const all = union({
    getPostsList: getPostsList,
    getPostsListSuccess: getPostsListSuccess,
    getPostsListFailed: getPostsListFailed,
    getPost: getPost,
    getPostSuccess: getPostSuccess,
    getPostFailed: getPostFailed,
    savePost: savePost,
    savePostSuccess: savePostSuccess,
    savePostFailed: savePostFailed,
    editPost: editPost,
    getEditedPost: getEditedPost,
    updatePost: updatePost,
    updatePostSuccess: updatePostSuccess,
    updatePostFailed: updatePostFailed,
  })
  export type PostsActions = typeof all; */
