import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { PostCategorie } from '../../Settings.Domain/Settings.Models/Settings';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SettingsViewModels } from '../Settings.ViewModels/SettingsViewModels';

@Component({
    selector: 'app-categories-dialog',
    templateUrl: './categories-dialog.component.html',
    styleUrls: ['./categories-dialog.component.css'],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class CategoriesDialogComponent implements OnInit {
  categoriesForm : FormGroup;
  buttonCaption = 'save';
  buttonicon = 'save';

  constructor(
    public dialogRef: MatDialogRef<CategoriesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public categoriesData: PostCategorie,
    private formBuilder: FormBuilder,
    private settingsViewModels:SettingsViewModels 
  ) {}

  ngOnInit() 
  {
    this.BuildForm();
    this.InitData();
  }


  BuildForm() {
    this.categoriesForm = this.formBuilder.group({
      categName: ['', Validators.required],
      categLabel: ['', Validators.required],
      id: [''],
    })
  }

  InitData()
  {
    if (this.categoriesData) {
      this.categoriesForm.patchValue(this.categoriesData);

    }
  }



  categoriesAction(){
    if (this.categoriesForm.valid) {
      if (!this.categoriesData) {
        this.CreateCatrgorie();
      }
      else {
        this.updateCatrgorie();
      }
    }
    else alert("خطأ في حجز البيانات");
  }

  updateCatrgorie(){
    this.settingsViewModels.updatePostCategorie(this.categoriesForm.value);
    this.dialogRef.close('none');
  }

  CreateCatrgorie(){
    this.settingsViewModels.addPostCategorie(this.categoriesForm.value)
    this.dialogRef.close('none');
  }

  closeForm() {
    this.dialogRef.close('none');
  }
  
}
