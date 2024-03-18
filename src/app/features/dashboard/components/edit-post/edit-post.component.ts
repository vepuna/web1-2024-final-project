import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";
import {ModalService} from "../../../../core/services/modal.service";
import {HttpClient} from "@angular/common/http";

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

  form: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.name),
      type: new FormControl(this.type),
      gender: new FormControl(this.gender),
      age: new FormControl(this.age),
      description: new FormControl(this.description),
      userId: new FormControl(this.userId),
      // image: new FormControl(null) // Убрал для примера
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('type', this.form.value.type);
    formData.append('gender', this.form.value.gender);
    formData.append('age', this.form.value.age);
    formData.append('description', this.form.value.description);
    formData.append('userId', this.form.value.userId);
  }
  submit(){
    console.log(this.form.value)
  }


}
