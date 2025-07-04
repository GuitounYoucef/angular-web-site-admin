import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MessageState } from "./message.reducer";  

export const MESSAGE_STATE_NAME='messageRed';

const getMessageState = createFeatureSelector<MessageState>(MESSAGE_STATE_NAME);

export const selectContactsList = createSelector(getMessageState, (state) => {
    return state.contactsList ? state.contactsList : null;
  })

export const selectMessageList = createSelector(
  getMessageState,
  (state) => {
    return state.messages ? state.messages : [];
  }
);

export const selectCurrentContact = createSelector(
  getMessageState,
  (state) => {
    return state.currntContact ? state.currntContact : null;
  }
);

export const selectUnreadedMessagesNumber = createSelector(
  getMessageState,
  (state) => {
    return state.unreadMessage ? state.unreadMessage : 0;
  }
);

export const selectLoadingState = createSelector(
  getMessageState,
  (state) => {
    return state.loadingMessages;
  }
);