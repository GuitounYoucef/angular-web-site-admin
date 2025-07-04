import { Injectable } from "@angular/core";
import { IMessageRepository } from "../../Message.Domain/Message.IRepository/IMessageRepository";
import { Observable, map, pluck } from "rxjs";

import { HttpService } from "src/app/Modules/Core/API/HttpService";

import { HttpRequestMethod } from "src/app/Modules/Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "src/app/Modules/Core/API/ApiResponse";
import { environment } from "src/environements/environement";
import { HttpClient } from "@angular/common/http";
import { Contact, Message } from "../../Message.Domain/Message.Models/Message";

@Injectable()
export class MessageRepository extends IMessageRepository {



    constructor(private httpService: HttpService,
                private httpClient: HttpClient) {
        super();
    } 

    getContactMessages(contactEmail:string,page:number): Observable<Message[]>
    {
        const requestURL = `${environment.apiURL}/get-conversations/${contactEmail}/${page}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
            let res = item as SuccessApiResponse<Message[]>;
            return res.results;
          })
        );
    }

    getContactsList(): Observable<Contact[]>
    {
        const requestURL = `${environment.apiURL}/get-contacts`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
            let res = item as SuccessApiResponse<Contact[]>;
            return res.results;
          })
        );
    }

 
  
    sendMessage(message:Message): Observable<string>{
        const requestURL = `${environment.apiURL}/save-message`;
        //return this.httpClient.message<any>(requestURL, message);
         console.log("Repository : message requestURL ",requestURL)
        const options = this.httpService.createOptions(
          HttpRequestMethod.post,
      //    this.httpService.createHeader(),
          requestURL,
          message,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<string>;
            return res.results;
          })
        );        
      
    }
  
    getMessageById(id:number): Observable<Message>{
        const requestURL = `${environment.apiURL}/messages/${id}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.get,
  //        this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
          map((item) => {
            let res = item as SuccessApiResponse<Message>;
            return res.results;
          })
        );
    }
    UpdateMessage(message:Message): Observable<object>{
        const requestURL = `${environment.apiURL}/messages`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.put,
  //        this.httpService.createHeader(),
          requestURL,
          message,
          false
        );
        return this.httpService.execute(options).pipe(
          pluck('results'),
          map((item) => {
            let res = item as SuccessApiResponse<Message>;
            return res.results;
          })
        );  
    }    
  
    deletemessage(messageID:number): Observable<any>{
        const requestURL = `${environment.apiURL}/messages/${messageID}`;
        const options = this.httpService.createOptions(
          HttpRequestMethod.delete,
   //       this.httpService.createHeader(),
          requestURL,
          null,
          false
        );
        return this.httpService.execute(options).pipe(
          pluck('results'),
          map((item) => {
            let res = item as SuccessApiResponse<Message>;
            return res.results;
          })
        );
    } 


    SetContactMessagesReaded(email:string): Observable<string>{
      const requestURL = `${environment.apiURL}/read-messages`;
      const options = this.httpService.createOptions(
        HttpRequestMethod.post,
//        this.httpService.createHeader(),
        requestURL,
        email,
        false
      );
      return this.httpService.execute(options).pipe(
        map((item) => {
          let res = item as SuccessApiResponse<string>;
          return res.results;
        })
      );  

    }



}