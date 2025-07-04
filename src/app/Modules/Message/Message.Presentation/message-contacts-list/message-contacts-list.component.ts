import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvatarModule } from 'ngx-avatars';
import { Contact } from '../../Message.Domain/Message.Models/Message';
import { Observable } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MessagesViewModel } from '../message-viewmodels/PostsViewModel';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-message-contacts-list',
  templateUrl: './message-contacts-list.component.html',
  styleUrls: ['./message-contacts-list.component.css'],
  standalone:true,
  imports: [
    AvatarModule,
    MatListModule,
    RouterModule,
    CommonModule, NgIf, NgFor,
  ],
})
export class MessageContactsListComponent implements OnInit {

  @Input() contactList: Observable<Contact[] | null>;
  @Output() getContactMessagesEvent= new EventEmitter<Contact>();

  constructor(private messagesViewModel:MessagesViewModel) { }

  ngOnInit() {
  }

  getContactMessages(contact:Contact)
  {
    this.getContactMessagesEvent.emit(contact);
    //this.messagesViewModel.getContactMessages(email);   
  }

}
