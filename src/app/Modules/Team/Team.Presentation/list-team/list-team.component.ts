import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TeamViewModel } from '../team-view-models/team-view-models';
import { MatIconModule } from '@angular/material/icon';
import { MemberCardComponent } from '../member-card/member-card.component';
import { MatDialog } from '@angular/material/dialog';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css'],
  standalone: true,
  imports: [CommonModule,
            NgIf,
            NgFor,
            RouterOutlet,
            RouterLink,
            RouterLinkActive,
            MatIconModule,
            MemberCardComponent
            ]            
})

export class ListTeamComponent implements OnInit {
  deleted: boolean = false;
  
  teamList$=this.teamViewModel.teamList$;
  settings$ = this.teamViewModel.settings$;
  
  constructor(private teamViewModel:TeamViewModel,
              private dialog: MatDialog,
               ) { }

  ngOnInit() {
    this.teamViewModel.getTeamList();    
    this.teamViewModel.getSettings();
  }

  addTeamMember()
  {
    this.dialog.open(MemberDialogComponent, {
      width:'60%',
     
    }).afterClosed().subscribe(val =>{
      if(val==='save'){
       // this.getUsersList();
      }
    });
  }

  editTeamMember(row:any){
    this.dialog.open(MemberDialogComponent, {
      width:'40%',
      data:row
    })
  }

  deleteMember(id:number){
    this.teamViewModel.deleteTeamMemeber(id);
  }

  restoreMember(id:number){
    this.teamViewModel.restoreTeamMemeber(id);
  }

}
