export class Message
{
  id?: number;
  type?:number;
  content?: string;
  topic?: string;
  contactName?: string;
  contactEmail?: string;
  viewed?:boolean;


}


export class Contact
{
  contactEmail?: string;
  contactName?: string;
  lastMessage: string;
  messageTime: Date;
  lastMessageStatus: boolean;
}

export class ContactDetail
{
  contactEmail?: string;
  contactName?: string;
  lastMessage: string;
  messageTime: Date;
  lastMessageStatus: boolean;
}

export class MessagesArray
{
  contactName?: string;
  messagesList?:Message[];
}