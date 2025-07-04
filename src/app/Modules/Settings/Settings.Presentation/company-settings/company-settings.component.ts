import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Company } from '../../Settings.Domain/Settings.Models/company';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

declare const L: any;

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
  ]
})
export class CompanySettingsComponent implements OnInit {
  companyForm !: FormGroup;

  @Input() Company: Observable<Company>;
  @Output() updateCompanyEvent= new EventEmitter<Company>();

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.BuildForm();
    this.Company.subscribe(companySetting => {
      if (companySetting) {
        this.companyForm.patchValue(companySetting!);
      }

    })
  }



  BuildForm() {

    this.companyForm = this.formBuilder.group({
      address: ['', Validators.required],
      phone2: ['', Validators.required],
      youtubeLink: ['', Validators.required],
      companyName: ['', Validators.required],
      phone1: ['', Validators.required],
      email: ['', Validators.required],
      mapLongitude: ['', Validators.required],
      mapLatitude: ['', Validators.required],
      facebookLink: ['', Validators.required],
      id: [''],
    })
  }

  updateCompany() {
   // if(this.companyForm.valid)
   console.log("company update",this.companyForm.value);
   let company= new Company();
   company=this.companyForm.value;
   this.companyForm.markAsPristine();
   this.updateCompanyEvent.emit(company);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap(); 
    }, 1000);
   
  }

  initMap() {


    let myMap = L.map('map').setView([this.companyForm.controls['mapLatitude'].value, this.companyForm.controls['mapLongitude'].value], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(myMap);

    let marker = L.marker([this.companyForm.controls['mapLatitude'].value, this.companyForm.controls['mapLongitude'].value]).addTo(myMap);
  }

  }
