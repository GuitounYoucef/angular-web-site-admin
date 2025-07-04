import { Component, OnInit } from '@angular/core';
import { TeamViewModel } from '../team-view-models/team-view-models';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ListTeamComponent } from '../list-team/list-team.component';


@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
    imports: [
        CommonModule,
        NgFor,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        ListTeamComponent
    ]
})
export class TeamComponent implements OnInit {



  constructor(private teamViewModel:TeamViewModel) { }

  ngOnInit(): void {
 
  }

}