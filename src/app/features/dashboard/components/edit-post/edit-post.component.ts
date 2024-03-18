import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";

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
  //@Input() image: File;
  constructor() {
  }
  form = new FormGroup({
    name: new FormControl<string>(''),
    type: new FormControl<string>(''),
    gender: new FormControl<string>(''),
    age: new FormControl<string>(''),
    description: new FormControl<string>(''),
    userId: new FormControl<string>(''),
    //image: new FormControl<File>(null),
  })
  ngOnInit() {
  }
  submit(){
    console.log(this.form.value)
  }


}
