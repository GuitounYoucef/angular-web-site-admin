import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getContactMessages, getContactsList, listenToMessages, sendMessage, setContactMessagesReaded, updateCurrentContact } from "../../Message.Data/Message.State/message.actions";
import { Contact, Message } from "../../Message.Domain/Message.Models/Message";
import { selectContactsList, selectCurrentContact, selectLoadingState, selectMessageList } from "../../Message.Data/Message.State/message.selectors";
import { MessageState } from "../../Message.Data/Message.State/message.reducer";

@Injectable({ providedIn: "root" })
export class MessagesViewModel {

    readonly contactsList$ = this.store.select(selectContactsList);
    readonly messagesList$ = this.store.select(selectMessageList);
    readonly currentContact$ = this.store.select(selectCurrentContact);
    readonly loadingState$ = this.store.select(selectLoadingState);


    constructor(
        private store: Store<MessageState>,
    ) { }

    getContactsList() {
        this.store.dispatch(getContactsList());

    }

    updateContact(contact: Contact) {
        this.store.dispatch(updateCurrentContact({ contact: contact }));
    }

    getContactMessages(contact: Contact, requestedPage: number) {
        this.store.dispatch(getContactMessages({ contact: contact, page: requestedPage }));

    }

    sendMessage(message: Message) {
        this.store.dispatch(sendMessage({ message: message }));
    }

    listenToMessages() {
        this.store.dispatch(listenToMessages());
    }

        

 


}  