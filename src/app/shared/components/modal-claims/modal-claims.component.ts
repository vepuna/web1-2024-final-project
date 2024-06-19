import {Component, OnInit} from '@angular/core';
import {ImageUrlPipe} from "../../pipe/image-url.pipe";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostsService} from "../../../core/services/posts.service";
import {AuthService} from "../../../core/services/auth.service";
import {ModalService} from "../../../core/services/modal.service";
import {ClaimsService} from "../../../core/services/claims.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-modal-claims',
  standalone: true,
  imports: [
    ImageUrlPipe,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './modal-claims.component.html'
})
export class ModalClaimsComponent implements OnInit {
  form: FormGroup;

  constructor(private claimService: ClaimsService,
              private formBuilder: FormBuilder,
              private modalService: ModalService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  createSubmit(): void {

    const formData = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      description: this.form.value.description
    };
    this.claimService.createClaim({formData: formData}).subscribe();
    this.modalService.close();
  }
  submit(){

  }
}
