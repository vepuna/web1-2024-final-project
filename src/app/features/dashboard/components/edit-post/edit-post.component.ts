import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";
import {ModalService} from "../../../../core/services/modal.service";
import {HttpClient} from "@angular/common/http";
import {PostsService} from "../../../../core/services/posts.service";
import {AuthService} from "../../../../core/services/auth.service";
import {TableAnimalsComponent} from "../table-animals/table-animals.component";

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ImageUrlPipe
  ],
  templateUrl: './edit-post.component.html'
})
export class EditPostComponent implements OnInit{
  @Input() name: string;
  @Input() type: string;
  @Input() gender: string;
  @Input() age: string;
  @Input() description: string;
  @Input() userId: string;
  @Input() postId: string;
  @Input() image: string;

  form: FormGroup;

  private fileSelected = false;
  constructor(private postsService: PostsService,
              private fb: FormBuilder,
              private authService: AuthService,
              private modalService: ModalService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      postId: [+this.postId],
      name: [this.name],
      type: [this.type],
      gender: [this.gender],
      age: [this.age],
      description: [this.description],
      userId: [+this.userId],
      image: [this.image] ,
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
  updateSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('type', this.form.value.type);
    formData.append('gender', this.form.value.gender);
    formData.append('age', this.form.value.age);
    formData.append('description', this.form.value.description);
    formData.append('userId', this.form.value.userId);
    formData.append('postId', this.form.value.postId);

    if(this.fileSelected){
      formData.append('image', this.form.value.image);
    }

    const token = this.authService.getToken();
    this.postsService.updatePost(formData, token).subscribe();
    console.log(formData, token);

    this.modalService.close();
  }

  deleteSubmit(): void {
    const token = this.authService.getToken();
    this.postsService.deletePost(this.postId, token).subscribe();

    this.modalService.close();
  }

  submit(){
    console.log(this.form.value)
  }

}
