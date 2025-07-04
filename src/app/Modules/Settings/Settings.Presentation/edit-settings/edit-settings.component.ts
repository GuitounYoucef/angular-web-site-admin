import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { settingsState } from '../../Settings.Data/Settings.State/settings.reducer';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { selectCompantSettings, selectPostCategories, selectSettings } from '../../Settings.Data/Settings.State/settings.selectors';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule, NgFor } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { FontSettings, PostCategorie } from '../../Settings.Domain/Settings.Models/Settings';
import { CompanySettingsComponent } from '../company-settings/company-settings.component';
import { FontSettingsComponent } from '../fonts-settings/fonts-settings.component';
import { CategorieSettingsComponent } from '../categories-settings/categories-settings.component';
import { SettingsViewModels } from '../Settings.ViewModels/SettingsViewModels';
import { Company } from '../../Settings.Domain/Settings.Models/company';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css'],
  standalone:true,
  imports:[FormsModule,
           ReactiveFormsModule,
           CommonModule,
           NgFor,
           MatFormFieldModule,
           MatIconModule,
           MatButtonModule,
           MatInputModule,
           MatSelectModule,
           MatTableModule,
           MatPaginatorModule,
           CompanySettingsComponent,
           FontSettingsComponent,
           CategorieSettingsComponent
          ]
})
export class EditSettingsComponent implements OnInit {

  readonly fontSettings$=this.store.select(selectSettings);
  readonly PostCategorieList$=this.store.select(selectPostCategories);
  readonly CompanySettings$=this.store.select(selectCompantSettings);

  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['id','categName','actions'];
  list!:PostCategorie[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  

  constructor(private store: Store<settingsState>,
              private settingsViewModels:SettingsViewModels 
              ) { 
      
  }

  ngOnInit() {
    this.settingsViewModels.initSettings();
  }

  updateCompany(company:Company)
  {
    console.log("edit settings ",company)
    this.settingsViewModels.updateCompany(company);
  }

  updateFontSettings(fontSettings:FontSettings){
    this.settingsViewModels.updateFontSettings(fontSettings);

  }






}
