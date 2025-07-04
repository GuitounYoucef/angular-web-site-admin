import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserDialogComponent } from 'src/app/Modules/User/User.Presentation/user-dialog/user-dialog.component';
import { TeamMember } from '../../Team.Domain/Team.Models/Team';
import { TeamViewModel } from '../team-view-models/team-view-models';
import { ITeamRepository } from '../../Team.Domain/Team.IRepository/ITeamRepository';

@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.css'],
  standalone:true,
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

  ],
})
export class MemberDialogComponent implements OnInit, AfterViewInit {

  memberForm : FormGroup;
  buttonCaption = 'save';
  buttonicon = 'save';
  formCaption='Create Member'
  hide = true;

  selectedFile!: File;
  mainImageURL?: string;
  imageLink?: string;
  @ViewChild('profileImage') profileImage!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public memberData: TeamMember,
    private formBuilder: FormBuilder,
    private teamViewModel:TeamViewModel,
    private teamRepository:ITeamRepository 
  ) {}

  ngOnInit() 
  {
    this.BuildForm();
    
  }

  BuildForm() {
    this.memberForm = this.formBuilder.group({
      id: ['',],
      memeberName: ['', Validators.required],
      memeberLevel: ['', Validators.required],
      memeberJob: ['', Validators.required],
      memeberDescription: ['', Validators.required],
      memeberFacebook: ['', ],
      memeberLinkedin: ['', ],
      memeberTwitter: ['', ],
      deleted: ['', ],
      imageLink: ['', Validators.required],
    })
  }

  InitData()
  {
    if (this.memberData) {
      this.memberForm.patchValue(this.memberData);
      this.buttonCaption = 'Update';
      this.buttonicon = 'update';
      this.formCaption='Update Member'
      this.profileImage.nativeElement.src = this.memberData.imageLink;

    }
  }

  ngAfterViewInit(): void {
    this.InitData();

  }



  userAction(){
    if (this.memberForm.valid) {
      if (!this.memberData) {
        this.CreateTeamMember();
      }
      else {
        this.updateTeamMember();
      }
    }
    else alert("خطأ في حجز البيانات");
  }

  updateTeamMember(){
    this.teamViewModel.updateTeam(this.memberForm.value);
    this.dialogRef.close('none');
  }

  CreateTeamMember(){
    this.teamViewModel.saveTeam(this.memberForm.value)
    this.dialogRef.close('none');
  }

  closeForm() {
    this.dialogRef.close('none');
  }

  OnFileSelected(event: any) {
    console.log("OnFileSelected :");
    this.selectedFile = <File>event.target.files[0];
    this.imageLink = event.target.files[0];
    this.uploadMainImage();
  }

  uploadMainImage() {
    const imageFile = new FormData;
    imageFile.append("upload", this.selectedFile, this.selectedFile.name);
    let imgUrl;
    console.log("image upload :");

    this.teamRepository.uploadImage(imageFile).subscribe(
      response => {
        if (response.uploaded === 1) {
          console.log("image URL = " + response.currentFolder!.url);
          this.memberForm.get('imageLink')?.patchValue(response.currentFolder!.url);
          let url = response.currentFolder?.url;
          this.profileImage.nativeElement.src = url;
        }
        else {
          console.log('Image not uploaded successfully');
        }
      }
    );
  
    }
}
