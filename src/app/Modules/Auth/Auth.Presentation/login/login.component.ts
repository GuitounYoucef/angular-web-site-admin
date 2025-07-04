import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthViewModel } from '../Auth.ViewModels/AuthViewModel';
import { take } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule, MatIconModule, MatButtonModule, MatInputModule, MatProgressBarModule
    ]
})
export class LoginComponent implements OnInit {

  direction: Direction = "rtl";
  authState$ = this.authViewModel.authState$;
  Loading$ = this.authViewModel.Loading$;

  loginform: FormGroup = new FormGroup(
    {
      username:new FormControl(),
      password:new FormControl()
    });
  constructor(private authViewModel:AuthViewModel,
              private router:Router,
              //private spinner: NgxSpinnerService,
              //private store: Store<AppState>
              ) { 
     
    }

    login() {

      this.authState$.pipe(take(1)).subscribe((state) =>{
        !state.loading &&
        this.authViewModel.loginWithCredential(
          this.loginform.get('username')?.value,
          this.loginform.get('password')?.value
        );
      })
  
    }    

  ngOnInit(): void {
    //this.authViewModel.logout();
  }
  
  onSubmit(){
    //this.spinner.show();
    if(this.loginform.valid)
    {
      this.login();
      //this.store.dispatch(loginStart(this.loginform.value));
    /*  this.authservice.login(this.loginform.value).subscribe((data)=>{
      console.log(data);
      this.spinner.hide();
    },(error)=>{
      alert("خطأ في حجز البيانات");
      this.spinner.hide();
    }
    
    );  */
  }
  else alert("خطأ في حجز البيانات");

  }

}
