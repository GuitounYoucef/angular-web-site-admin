import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";


import { catchError, exhaustMap, map, pipe, tap, of, debounce, auditTime, debounceTime } from "rxjs";
import { IMessageRepository } from "../../Message.Domain/Message.IRepository/IMessageRepository";
import { Router } from "@angular/router";
import {
    getContactMessages, getContactMessagesFailed, getContactMessagesSuccess, getContactsList,
    getContactsListFailed, getContactsListSuccess, listenToMessages, messageRecieved, sendMessage, sendMessageFailed, sendMessageSuccess, setContactMessagesReaded, setContactMessagesReadedFailed, setContactMessagesReadedSuccess, startLoadingMessages, updateCurrentContact, updateUreadedMessages
} from "./message.actions";
import { SocketService } from "src/app/Modules/Core/Services/socket/socketService";
import { MessageState } from "./message.reducer";
import { Store } from "@ngrx/store";
import { AudioService } from "src/app/Modules/Core/Services/AudioService";


@Injectable()
export class MessageEffets {
    constructor(
        private actions$: Actions,
        private messageRpository: IMessageRepository,
        private socketService: SocketService,
        private store: Store<MessageState>,
        private audioService:AudioService,
    ) {
        this.socketService.joinConversation();
    }

    loadContactMessages$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getContactMessages),
            debounceTime(600),
            exhaustMap((action) => {
                return this.messageRpository.getContactMessages(action.contact.contactEmail!,action.page).pipe(
                    map((MessageList) => {
                        console.log("getCardsMessageList : ", MessageList);
                        this.store.dispatch(startLoadingMessages());
                        this.store.dispatch(setContactMessagesReaded({email:action.contact.contactEmail!}));
                        return getContactMessagesSuccess({ messageList: MessageList });
                    }),
                    catchError(err => { return of(getContactMessagesFailed()) }),

                )
            })
        )
    });

    onSetContactMessagesReaded$=createEffect(() => {
        return this.actions$.pipe(
            ofType(setContactMessagesReaded),
            exhaustMap((action) => {
                return this.messageRpository.SetContactMessagesReaded(action.email).pipe(
                    map((ContactsList) => {
                          return setContactMessagesReadedSuccess();
                    }),
                    catchError(err => { return of(setContactMessagesReadedFailed()) }),

                )
            })
        )
    });

    loadContactsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getContactsList),
            exhaustMap((action) => {
                return this.messageRpository.getContactsList().pipe(
                    map((ContactsList) => {
                        console.log("getCardsMessageList : ", ContactsList);
                        let ureadedMessages=ContactsList.filter(item => item.lastMessageStatus == false).length;
                        this.store.dispatch(updateUreadedMessages({count:ureadedMessages}));
                        const contact=ContactsList[0];
                        this.store.dispatch(updateCurrentContact({ contact: contact }));
                        this.store.dispatch(getContactMessages({ contact: contact,page:1 }));
                        return getContactsListSuccess({ contactsList: ContactsList });
                    }),
                    catchError(err => { return of(getContactsListFailed()) }),

                )
            })
        )
    });

    ListenToMessages$ = createEffect(
        () =>

        
            this.socketService.getMessageSubject().pipe(
                map((mesg) => {
                    console.log("getCardsMessageList : ", mesg);
                    this.store.dispatch(messageRecieved({ message: mesg }));
                })),
        { dispatch: false }


    );

    onMessageRecieved$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(messageRecieved),
            exhaustMap((action) => {
                return this.messageRpository.getContactMessages(action.message.contactEmail!,1).pipe(
                    map((MessageList) => {
                        console.log("getCardsMessageList : ", MessageList);
                        this.audioService.playAudio();
                        return getContactMessagesSuccess({ messageList: MessageList });
                    }),
                    catchError(err => { return of(getContactMessagesFailed()) }),

                )
            })
        )
    });

    onSendMessage$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(sendMessage),
            exhaustMap((action) => {
                return this.messageRpository.sendMessage(action.message).pipe(
                    map((resp) => {
                        console.log("getCardsMessageList : ", resp);
                        return sendMessageSuccess();
                    }),
                    catchError(err => { return of(sendMessageFailed()) }),

                )
            })
        )
    });
    /*
   
       loadMessageById$ = createEffect(() => {
           return this.actions$.pipe(
               ofType(getMessage),
               exhaustMap((action) => {
                   return this.messageRpository.getMessageById(action.id).pipe(
                       map((message) => {
                           console.log("getMessageById : ",message);
                           return getMessageSuccess({ message });
                       }),
                       catchError(err => { return of(getMessageFailed()) }),  
                    
                   )
               })
           )
       });    
   
       saveMessage$ = createEffect(() => {
           return this.actions$.pipe(       
               ofType(saveMessage),
               exhaustMap((action) => {
                   return this.messageRpository.createMessage(action.message).pipe(
                       map((respense) => {
                           let message="save Message Success"
                           return saveMessageSuccess({message});
                       })
                       ,
                       catchError(err => { return of(saveMessageFailed()) }),  
                   )
               })
           )
       });    
   
   
       updateMessage$ = createEffect(() => {
           return this.actions$.pipe(       
               ofType(updateMessage), 
               exhaustMap((action) => {
                   return this.messageRpository.UpdateMessage(action.message).pipe(
                       map((respense) => {
                           let message="update Message Success"
                           return updateMessageSuccess({message});
                       })
                       ,
                       catchError(err => { return of(updateMessageFailed()) }),  
                   )
               })
           )
       });   
        */



}