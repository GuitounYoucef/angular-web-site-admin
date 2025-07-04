
import { Observable} from "rxjs";
import {  Contact, Message } from "../Message.Models/Message";

export abstract class IMessageRepository {

    abstract getContactMessages(contactEmail:string,page:number): Observable<Message[]>
 
    abstract getContactsList(): Observable<Contact[]>
  
    abstract getMessageById(id:number): Observable<Message>

    abstract sendMessage(message:Message): Observable<string>

    abstract UpdateMessage(message:Message): Observable<object>
  
    abstract deletemessage(MessageID:number): Observable<any>

    abstract SetContactMessagesReaded(email:string): Observable<string>
}