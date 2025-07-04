import { Component, OnInit, ViewChild } from '@angular/core';
import { UserViewModel } from '../user-view-models/user-view-models';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';


@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
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
    ]
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['userName','role','accountStatus','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usersList$=this.userViewModel.userList$;


  constructor(
              private dialog: MatDialog,
              private userViewModel:UserViewModel) {
                this.userViewModel.getUserList();
               }

  ngOnInit(): void {
    
    this.usersList$.subscribe(
      data=>{
      console.log("data :::",data)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;

     });
  }


  
  addUser()
  {
    this.dialog.open(UserDialogComponent, {
      width:'40%',
     
    }).afterClosed().subscribe(val =>{
      if(val==='save'){
       // this.getUsersList();
      }
    });
  }

  editUser(row:any){
    this.dialog.open(UserDialogComponent, {
      width:'40%',
      data:row
    })
  }



}