import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.reducer";

export const POSTS_STATE_NAME='postReducer';

const getPostsState = createFeatureSelector<postsState>(POSTS_STATE_NAME);


export const selectEditingPost = createSelector(getPostsState, (state) => {
    return state.PostDetail ? state.PostDetail : null;
  })


export const selectPostsList = createSelector(
  getPostsState,
  (state) => {
    return state.postsList ? state.postsList : [];
  }
);

export const selectDeletedPostsList = createSelector(
  getPostsState,
  (state) => {
    return state.deletedPostsList ? state.deletedPostsList : [];
  }
);