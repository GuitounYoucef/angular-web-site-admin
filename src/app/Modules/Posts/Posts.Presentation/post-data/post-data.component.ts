import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Post } from '../../Posts.Domain/Posts.Models/Posts';
import * as  ClassicEditor from 'src/app/Ckeditor/@haifahrul/ckeditor5-build-rich';
import { CKEditorGlobalsService } from 'src/app/Modules/Core/Services/CKEditorGlobalsService';
import { IPostsRepository } from '../../Posts.Domain/Posts.IRepository/IPostsRepository';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { PostsViewModel } from '../Posts.ViewModels/PostsViewModel';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AuthViewModel } from 'src/app/Modules/Auth/Auth.Presentation/Auth.ViewModels/AuthViewModel';


@Component({


  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CKEditorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonToggleModule,

  ],
})
export class PostDataComponent implements OnInit {

  selectedFile!: File;
  mainImageURL?: string;
  postForm !: FormGroup;
  imageLink?: string;
  @ViewChild('myImage') image!: ElementRef;

  @Input() post!: Post;
  @Input() formCaption: string;
  @Input() buttonCaption: string;
  @Input() buttonicon: string;


  public Editor = ClassicEditor;
  public ckconfig = CKEditorGlobalsService.CkConfig;

  settings$ = this.postsViewModel.settings$;
  postCategories$ = this.postsViewModel.postCategories$;
  readonly curentUser$ = this.authViewModel.currentUser$;


  constructor(private formBuilder: FormBuilder,
    private postsViewModel: PostsViewModel,
    private authViewModel:AuthViewModel,
    private postRepository: IPostsRepository,
  ) {
  }

  ngOnInit() {
    this.postsViewModel.getSettings();
    this.postsViewModel.getPostCategorieList();
    this.BuildForm();

  }

  ngAfterViewInit(): void {
    if (this.buttonCaption === 'Update') {
      this.postsViewModel.editingPost$.subscribe(
        (resp) => {

          this.postForm.patchValue(resp!);
          this.image.nativeElement.src = resp!.imageLink;
        });
    }

  }


  BuildForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      postCategorie: ['', Validators.required],
      cardContent: ['', Validators.required],
      imageLink: ['', Validators.required],
      statement: ['', Validators.required],
      id: ['', ],
      deleted: ['', ],
      valid: ['', ],
      commentStatus: ['', ],
    })
  }


  onSubmit() {
    if (this.postForm.valid) {
      if (this.buttonCaption === 'Save')
        this.createPost()
      else
        if (this.buttonCaption === 'Update')
          this.updatePost();
    }
    else alert("خطأ في حجز البيانات");


  }

  createPost() {
    console.log("form value ", this.postForm.value)
    let post:Post=new Post();
    post=this.postForm.value;

    this.postsViewModel.savePost(post);
  }

  updatePost() {
    let post:Post=new Post();
    post=this.postForm.value;

    this.postsViewModel.updatePost(post);
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

    this.postRepository.uploadImage(imageFile).subscribe(
      response => {
        if (response.uploaded === 1) {
          console.log("image URL = " + response.currentFolder?.url);
          this.postForm.get('imageLink')?.patchValue(response.currentFolder?.url);
          let url = response.currentFolder?.url;
          this.image.nativeElement.src = url;
        }
        else {
          console.log('Image not uploaded successfully');
        }
      }
    );
    /* console.log("image url :",imgUrl);
    
     this.postForm.get('imageLink')?.patchValue(imgUrl!.currentFolder?.url);  
    let url=imgUrl!.currentFolder?.url;
    this.image.nativeElement.src = window.URL.createObjectURL(imgUrl!.currentFolder?.url)  */




  }

}
