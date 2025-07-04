import { Component, Input, OnInit } from '@angular/core';
import { ContactDetail } from '../../Message.Domain/Message.Models/Message';
import { Observable } from 'rxjs';
import { AvatarModule } from 'ngx-avatars';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-contact-detail',
  templateUrl: './message-contact-detail.component.html',
  styleUrls: ['./message-contact-detail.component.css'],
  standalone:true,
  imports: [
            AvatarModule,
            CommonModule,
  ]
})
export class MessageContactDetailComponent implements OnInit {

  @Input() contactDetail:ContactDetail;

  constructor() { }

  ngOnInit() {
  }

}
