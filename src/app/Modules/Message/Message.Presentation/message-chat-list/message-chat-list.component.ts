import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../../Message.Domain/Message.Models/Message';
import { MessagesViewModel } from '../message-viewmodels/PostsViewModel';
import { Observable, filter, map, pairwise, throttleTime } from 'rxjs';
import { AvatarModule } from 'ngx-avatars';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {CdkVirtualScrollViewport, ScrollingModule} from '@angular/cdk/scrolling';
import { SubSink } from 'subsink';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
    selector: 'app-message-chat-list',
    templateUrl: './message-chat-list.component.html',
    styleUrls: ['./message-chat-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AvatarModule,
        FormsModule,
        CommonModule, NgIf, NgFor,
        MatIconModule,
        ScrollingModule,
        MatProgressSpinnerModule
    ]
})
export class MessageChatListComponent implements OnInit,  AfterViewChecked, AfterViewInit , OnDestroy{


  @Output() sendMessageEvent= new EventEmitter<string>();
  @Output() nextPageEvent= new EventEmitter();
  messagesList$ = this.messagesViewModel.messagesList$;
  loadingState$ = this.messagesViewModel.loadingState$;
  message:string=''
  @ViewChild(CdkVirtualScrollViewport) scrollView: CdkVirtualScrollViewport;
  end:boolean=false;
  isLastPage:boolean=false;
  subs = new SubSink();


 
 

  constructor(private messagesViewModel:MessagesViewModel) { }

  ngOnInit() {


  }

  sendMessage()
  {
    this.sendMessageEvent.emit(this.message)
  }




ngAfterViewInit(): void {



  this.subs.sink=this.scrollView
      .elementScrolled()
      .subscribe((r) => {


        const total = this.scrollView.measureScrollOffset()
        if(total==0){
            this.scrollView.scrollToIndex(3);
            this.nextPageEvent.emit();
        }
        else{
          this.end=true;
        }
      });
}
ngOnDestroy(): void {
  this.subs.unsubscribe();
}

ngAfterViewChecked(): void {
  
  if(!this.end)
  {
    this.scrollView.scrollTo({ bottom: 0, behavior: 'auto' });
    
  }





}

}
