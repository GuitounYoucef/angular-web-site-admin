import { Action, createReducer, on } from "@ngrx/store";
import { Contact, Message, MessagesArray } from "../../Message.Domain/Message.Models/Message";
import {  getContactMessages, getContactMessagesSuccess, getContactsListSuccess, incrementRequestedPage, messageRecieved, sendMessage, startLoadingMessages, updateCurrentContact, updateUreadedMessages } from "./message.actions";


export interface MessageState {
  contactsList: Contact[];
  messages: Message[];
  currentContactmessages: Message[];
  currntContact: Contact | null;
  unreadMessage: number;
  requestedPage: number;
  loadingMessages:boolean;

};

export const initialState: MessageState = {
  contactsList: [],
  messages: [],
  currentContactmessages: [],
  currntContact: null,
  unreadMessage: 0,
  requestedPage: 1,
  loadingMessages:false
};

/*************************************************************************************************/
export const MessageReducer = createReducer(
  initialState,
  on(getContactsListSuccess, (state, action) => {
    return {
      ...state,
      contactsList: action.contactsList
    };
  }),
  on(getContactMessagesSuccess, (state, action) => {
    return {
      ...state,
      messages: state.requestedPage == 1 ? action.messageList : [...action.messageList, ...state.messages],
      loadingMessages: false
    };
  }),
  on(sendMessage, (state, action) => {
    return {
      ...state,
      messages: [...state.messages, action.message],
      currentContactmessages: [...state.currentContactmessages, action.message]
    };
  }),
  on(getContactMessages, (state, action) => {

    return {
      ...state,
      requestedPage: action.page
    };
  }),
  on(messageRecieved, (state, action) => {
    return {
      ...state,
      unreadMessage: state.unreadMessage + 1
    };
  }),
  on(updateUreadedMessages, (state, action) => {
    return {
      ...state,
      unreadMessage: state.unreadMessage + action.count
    };
  }),
  on(startLoadingMessages, (state, action) => {
    return {
      ...state,
      loadingMessages: true
    };
  }),



  
/*   on(updateCurrentContact, (state, action) => {
    return {
      ...state,
      currntContact: action.contact,
      requestedPage: 1
    };
  }), */









);

export function reducer(state: MessageState | undefined, action: Action) {
  return MessageReducer(state, action);
}