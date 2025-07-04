import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageContactDetailComponent } from '../message-contact-detail/message-contact-detail.component';
import { MessageHeaderComponent } from '../message-header/message-header.component';
import { MessageContactsListComponent } from '../message-contacts-list/message-contacts-list.component';
import { MessageChatListComponent } from '../message-chat-list/message-chat-list.component';
import { MessagesViewModel } from '../message-viewmodels/PostsViewModel';

import { environment } from 'src/environements/environement';
import { SocketService } from 'src/app/Modules/Core/Services/socket/socketService';
import { Contact, ContactDetail, Message } from '../../Message.Domain/Message.Models/Message';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    imports: [CommonModule,
        RouterOutlet,
        MessageContactDetailComponent,
        MessageHeaderComponent,
        MessageContactsListComponent,
        MessageChatListComponent,
    ]
})

export class MessageComponent implements OnInit {

  contactsList$ = this.messagesViewModel.contactsList$;

  currentContact: Contact=new Contact();
  messages: any[] = [];
  requestedPage:number=1;

  contactDetail:ContactDetail;




  constructor(private messagesViewModel: MessagesViewModel,
    private socketService: SocketService

  ) {

  }



  ngOnInit(): void {
    this.messagesViewModel.getContactsList();
    //  this.initConnexion();

    //this.messagesViewModel.listenToMessages();




  }

  sendmessage(message:string) {
      let m: Message = new Message();
      m.contactName = this.currentContact.contactName;
      m.contactEmail = this.currentContact.contactEmail;
      m.content = message;
      m.type = 1;
      this.messagesViewModel.sendMessage(m);



  }
  getContactMessages(contact:Contact){
    this.currentContact=contact;
    this.requestedPage=1;
    this.messagesViewModel.getContactMessages(this.currentContact,this.requestedPage);

    this.contactDetail=contact;

     
  }

  getNextPage(){
    this.requestedPage++;
    this.messagesViewModel.getContactMessages(this.currentContact,this.requestedPage);
  }


}