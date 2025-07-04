import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontSettings } from '../../Settings.Domain/Settings.Models/Settings';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-fonts-settings',
    templateUrl: './fonts-settings.component.html',
    styleUrls: ['./fonts-settings.component.css'],
    imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgFor,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class FontSettingsComponent implements OnInit {

  fontSettingsForm !: FormGroup;
  fontList=["CairoBlod", "CairoBlack", "CairoFont"];

  @Input() FontSettings:Observable<FontSettings>;
  @Output() updateFontSettingsEvent= new EventEmitter<FontSettings>();


  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.BuildForm();
    this.FontSettings.subscribe(fontSetting=>{
      if(fontSetting)
      {
        this.fontSettingsForm.patchValue(fontSetting!);
      }
      
    })
  }

  BuildForm(){
    this.fontSettingsForm = this.formBuilder.group({
      fontFamily: ['', Validators.required],
      fontSizeParagraph: ['', Validators.required],
      fontSizeTitle: ['', Validators.required],
      textAlign: ['', Validators.required],
      id: [''],
    })     
  }  

  updateFont(){
    let fontSettings=new FontSettings();
    fontSettings=this.fontSettingsForm.value;
    this.fontSettingsForm.markAsPristine();
    this.updateFontSettingsEvent.emit(fontSettings);


  }

}
