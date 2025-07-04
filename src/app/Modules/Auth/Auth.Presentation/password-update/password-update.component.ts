import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PasswordUpdate } from '../../Auth.Domain/Auth.Models/User';
import { AuthViewModel } from '../Auth.ViewModels/AuthViewModel';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';


@Component({
    selector: 'app-password-update',
    templateUrl: './password-update.component.html',
    styleUrls: ['./password-update.component.css'],
    imports: [
        FormsModule, CommonModule, MatDividerModule,
        ReactiveFormsModule, MatIconModule, MatButtonModule, MatInputModule, MatDialogModule
    ]
})
export class PasswordUpdateComponent implements OnInit {
  direction: Direction = "rtl";
  minPw = 3;
  passwordForm!: FormGroup;
  buttonCaption = 'تأكيد';
  buttonicon = 'save';

  passwordUpdate: PasswordUpdate = new PasswordUpdate();
  username: string = '';
  readonly curentUser$ = this.authViewModel.currentUser$.subscribe(
    user=>
    {
       this.username=user.username;
    });

  constructor(private formBuilder: FormBuilder,


    private authViewModel: AuthViewModel,
    private dialogRef: MatDialogRef<PasswordUpdateComponent>,
  ) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      id:['',],
      oldPassword: ['', [Validators.required, Validators.minLength(this.minPw)]],
      newPassword: ['', [Validators.required, Validators.minLength(this.minPw)]],
      newPasswordConfi: ['', [Validators.required, Validators.minLength(this.minPw)]],
    }, { validators: this.passwordMatchValidator('newPassword', 'newPasswordConfi') });
    //this.username=this.authService.getUserName();
  }


  private passwordMatchValidator(oldPassword: string, newPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const valueOfoldPassword = formGroup.get(oldPassword)?.value;
      const valueOfnewPassword = formGroup.get(newPassword)?.value;

      if (valueOfoldPassword === valueOfnewPassword)
        return null;
      else
        return { passwordMismatch: true };
    }
  };

  updatePassword() {
    if (this.passwordForm.valid) {
      this.passwordUpdate.userName=this.username;
      this.passwordUpdate.oldPassword=this.passwordForm.get('oldPassword')?.value ;
      this.passwordUpdate.newPassword=this.passwordForm.get('newPassword')?.value ;
      this.authViewModel.updatePassword(this.passwordUpdate)
    }
  }
  closeForm(){
    this.dialogRef.close('none');
  }
}
