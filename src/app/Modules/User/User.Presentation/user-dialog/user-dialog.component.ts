import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../User.Domain/User.Models/User';
import { UserViewModel } from '../user-view-models/user-view-models';
import {MatSelectModule} from '@angular/material/select';
@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.css'],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
    ]
})
export class UserDialogComponent implements OnInit {

  usersForm : FormGroup;
  buttonCaption = 'save';
  buttonicon = 'save';
  formCaption='Create User'
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public usersData: User,
    private formBuilder: FormBuilder,
    private userViewModel:UserViewModel 
  ) {}

  ngOnInit() 
  {
    this.BuildForm();
    this.InitData();
  }

  BuildForm() {
    this.usersForm = this.formBuilder.group({
      userName: ['', Validators.required],
      nomPrenomArb: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      accountStatus: ['', Validators.required],
    })
  }

  InitData()
  {
    if (this.usersData) {
      this.usersForm.patchValue(this.usersData);
      this.buttonCaption = 'Update';
      this.buttonicon = 'update';
      this.formCaption='Update User'

    }
  }



  userAction(){
    if (this.usersForm.valid) {
      if (!this.usersData) {
        this.CreateUser();
      }
      else {
        this.updateUser();
      }
    }
    else alert("خطأ في حجز البيانات");
  }

  updateUser(){
    this.userViewModel.updateUser(this.usersForm.value);
    this.dialogRef.close('none');
  }

  CreateUser(){
    this.userViewModel.saveUser(this.usersForm.value)
    this.dialogRef.close('none');
  }

  closeForm() {
    this.dialogRef.close('none');
  }
  

}
