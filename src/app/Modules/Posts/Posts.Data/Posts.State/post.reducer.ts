import { Action, createReducer, on} from "@ngrx/store";
import { CardPost, Post } from "../../Posts.Domain/Posts.Models/Posts";
import { editPost, getDeletedPostsListSuccess, getPostSuccess, getPostsListSuccess } from "./posts.actions";

export interface postsState{
    postsList : CardPost[];
    deletedPostsList : CardPost[];
    PostDetail: Post | null;

};

export const initialState:postsState={
    postsList:[],
    deletedPostsList:[],
    PostDetail:null
};

/*************************************************************************************************/
export const PostReducer = createReducer(
    initialState,
  on(getPostsListSuccess, (state, action) => {
    return {
      ...state,
      postsList:action.cardsPostList

    };
  }),
  on(getDeletedPostsListSuccess, (state, action) => {
    return {
      ...state,
      deletedPostsList:action.cardsPostList

    };
  }),  
  on(getPostSuccess, (state, action) => {
    return {
      ...state,
      PostDetail:action.post
    };
  }),
  on(editPost, (state, action) => {
    return {
      ...state,
      PostDetail:action.post
    };
  }),     
);

export function reducer(state: postsState | undefined, action: Action) {
    return PostReducer(state, action);
}