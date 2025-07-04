import { createAction, props } from "@ngrx/store";
import {  Contact, Message } from "../../Message.Domain/Message.Models/Message";


export const GET_CONTACTS_LIST = "[Contacts List] get Contacts List"
export const GET_CONTACTS_LIST_SUCCESS = "[Contacts List] get Contacts List success"
export const GET_CONTACTS_LIST_FAILED = "[Contacts List] get Contacts List failed"
export const UPDATE_CURRENT_CONTACT = "[Contact] current contact updated"

export const getContactsList = createAction(GET_CONTACTS_LIST);
export const getContactsListSuccess = createAction(GET_CONTACTS_LIST_SUCCESS, props<{ contactsList: Contact[] }>());
export const getContactsListFailed = createAction(GET_CONTACTS_LIST_FAILED);
export const updateCurrentContact = createAction(UPDATE_CURRENT_CONTACT,props<{ contact: Contact}>());
/*---------------------------------------------------------------------------------------------------------------*/

export const GET_CONTACT_MESSAGES = "[messages] get Contact Messages"
export const GET_CONTACT_MESSAGES_SUCCESS = "[messages] get Contact Messages success"
export const GET_CONTACT_MESSAGES_FAILED = "[messages] get Contact Messages failed"
export const ICREMENT_REQUESTED_PAGE = "[Messsage] listen to Message"
export const START_LOADING_MESSAGES = "[Messsage] start loading messages"


export const getContactMessages = createAction(GET_CONTACT_MESSAGES, props<{ contact:Contact, page:number }>());
export const getContactMessagesSuccess = createAction(GET_CONTACT_MESSAGES_SUCCESS, props<{ messageList: Message[]}>());
export const getContactMessagesFailed = createAction(GET_CONTACT_MESSAGES_FAILED);
export const incrementRequestedPage = createAction(ICREMENT_REQUESTED_PAGE);
export const startLoadingMessages = createAction(START_LOADING_MESSAGES);



/*---------------------------------------------------------------------------------------------------------------*/

export const SEND_MESSAGE = "[post] SEND Message"
export const SEND_MESSAGE_SUCCESS = "[posts] SEND Message success"
export const SEND_MESSAGE_FAILED = "[posts] SEND Message failed"

export const sendMessage = createAction(SEND_MESSAGE, props<{ message: Message }>());
export const sendMessageSuccess = createAction(SEND_MESSAGE_SUCCESS);
export const sendMessageFailed = createAction(SEND_MESSAGE_FAILED);
/*---------------------------------------------------------------------------------------------------------------*/

export const LISTEN_TO_MESSAGE = "[Messsage] listen to Message"
export const MESSAGE_RECIEVED = "[Messsage] Notification recieved"


export const listenToMessages = createAction(LISTEN_TO_MESSAGE);
export const messageRecieved = createAction(MESSAGE_RECIEVED, props<{ message: Message}>());


export const UPDATE_UNREADED_MESSAGES = "[Messages] update Ureaded Messages"
export const updateUreadedMessages = createAction(UPDATE_UNREADED_MESSAGES, props<{ count: number}>());

export const SET_CONTACT_MESSAFES_READED = "[Messages] set Contact Messages Readed"
export const setContactMessagesReaded = createAction(SET_CONTACT_MESSAFES_READED, props<{ email:string}>());

export const SET_CONTACT_MESSAFES_READED_SUCCESS = "[Messages] set Contact Messages Readed Success"
export const setContactMessagesReadedSuccess = createAction(SET_CONTACT_MESSAFES_READED_SUCCESS);

export const SET_CONTACT_MESSAFES_READED_FAILED = "[Messages] set Contact Messages Readed Failed"
export const setContactMessagesReadedFailed = createAction(SET_CONTACT_MESSAFES_READED_FAILED);


