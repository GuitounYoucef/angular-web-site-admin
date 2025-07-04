import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { StatCardComponent } from './stat-card/stat-card.component';
import { statisticsState } from '../Statistics.Data/Satistics.State/satistics.reducer';
import { Store } from '@ngrx/store';
import { selectVisiteNumber } from '../Statistics.Data/Satistics.State/satistics.selectors';
import { getVisiteNumber } from '../Statistics.Data/Satistics.State/satistics.actions';

@Component({
  selector: 'app-statistics-data',
  templateUrl: './statistics-data.component.html',
  styleUrls: ['./statistics-data.component.css'],
  standalone:true,
  imports:[FormsModule,
           CommonModule,
           ReactiveFormsModule,
           NgFor,
           MatFormFieldModule,
           MatIconModule,
           MatButtonModule,
           MatInputModule,
           MatSelectModule,
           MatTableModule,
           MatPaginatorModule,
           StatCardComponent
          ]
})
export class StatisticsDataComponent implements OnInit {

  visiteNumber$=this.store.select(selectVisiteNumber)

  constructor(private store: Store<statisticsState>) { }

  ngOnInit() {
    this.store.dispatch(getVisiteNumber()); 

  }

}
