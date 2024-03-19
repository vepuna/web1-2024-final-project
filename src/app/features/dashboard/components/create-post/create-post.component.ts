import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {EditPostComponent} from "../edit-post/edit-post.component";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {ModalService} from "../../../../core/services/modal.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";
import {AuthService} from "../../../../core/services/auth.service";
import {PostsService} from "../../../../core/services/posts.service";

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    AsyncPipe,
    EditPostComponent,
    ModalComponent,
    NgIf,
    FormsModule,
    ImageUrlPipe,
    ReactiveFormsModule
  ],
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent implements OnInit {

  form: FormGroup;
  protected fileSelected = false;

  constructor(private postsService: PostsService,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private modalService: ModalService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      userId: [1],
      image: ['', Validators.required]
    });
  }
  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        image: file,
      });
      this.fileSelected = true;
    }
  }
  createSubmit(): void {
    if(this.fileSelected){
      const formData = new FormData();
      formData.append('name', this.form.value.name);
      formData.append('type', this.form.value.type);
      formData.append('description', this.form.value.description);
      formData.append('age', this.form.value.age);
      formData.append('gender', this.form.value.gender);
      formData.append('userId', this.form.value.userId);
      formData.append('image', this.form.value.image);

      const token = this.authService.getToken();
      this.postsService.createPost(formData, token).subscribe();
      this.modalService.close();
    }
    console.log('click');
  }
  submit(){

  }

}
