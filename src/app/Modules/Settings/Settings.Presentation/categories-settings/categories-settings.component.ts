import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PostCategorie } from '../../Settings.Domain/Settings.Models/Settings';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CategoriesDialogComponent } from '../categories-dialog/categories-dialog.component';

@Component({
    selector: 'app-categories-settings',
    templateUrl: './categories-settings.component.html',
    styleUrls: ['./categories-settings.component.css'],
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
export class CategorieSettingsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['id','categName','categLabel','actions'];
  list!:PostCategorie[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() postCategories:Observable<PostCategorie[]>;





  constructor(public dialog: MatDialog) { }

  ngOnInit() {
   this.postCategories.subscribe(
      categList=>{
        this.dataSource = new MatTableDataSource(categList);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    );

  }

  openDialog(row:PostCategorie | null): void {
    const dialogRef = this.dialog.open(CategoriesDialogComponent, {
      data:row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  onSubmit(){
    //this.updateSettings();
  }
  updateCategorie(row:PostCategorie){
    this.openDialog(row);
  }
  deleteCteg(s:string)
  {

  }

  AddCategorie(){
    this.openDialog(null);
    //this.store.dispatch(savePostCategorie({postCategorie:categ}))

  }
}
