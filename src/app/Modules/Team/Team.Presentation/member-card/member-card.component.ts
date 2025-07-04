import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { TeamMember } from '../../Team.Domain/Team.Models/Team';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';


@Component({
    selector: 'app-member-card',
    templateUrl: './member-card.component.html',
    styleUrls: ['./member-card.component.css'],
    imports: [FormsModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class MemberCardComponent implements OnInit {

  @Input() teamMember: TeamMember;
  @Input() textAlign: string;
  @Input() fontFamily: string;
  @Input() fontSizeTitle: number;
  @Input() fontSizeParagraph: number;
  @Input() deleted: boolean;

  @Output() deleteMemeberEvent= new EventEmitter<number>();
  @Output() restoreMemeberEvent= new EventEmitter<number>();

  constructor(private matIconRegistry:MatIconRegistry,
              private domSanitizer:DomSanitizer,
              private dialog: MatDialog,
    ) { 
      this.matIconRegistry.addSvgIcon('twitter-icon',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/twitter-box.svg'));
      this.matIconRegistry.addSvgIcon('facebook-icon',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/facebook-box.svg'));
      this.matIconRegistry.addSvgIcon('linkedin-icon',this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin-box.svg'));
    }

  ngOnInit() {
  }


  editTeamMember(){
    this.dialog.open(MemberDialogComponent, {
      width:'60%',
      data:this.teamMember
    })
  }

  deleteTeamMember(id:number)
  {
    if(window.confirm("Are you sure you want to delete this team member ?")) 
    {
      this.deleteMemeberEvent.emit(id);
    }
    
  }

  restoreTeamMember(id:number)
  {
    if(confirm("Are you sure you want to restore this team member ?")) 
    {
    this.restoreMemeberEvent.emit(id);
    }
  }
}
