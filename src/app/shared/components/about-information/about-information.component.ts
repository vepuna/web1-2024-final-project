import {Component, OnInit} from '@angular/core';
import {ModalClaimsComponent} from "../modal-claims/modal-claims.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ClaimsService} from "../../../core/services/claims.service";
import {NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about-information',
  standalone: true,
  imports: [
    ModalClaimsComponent,
    ReactiveFormsModule,
    NgIf,
    TranslateModule
  ],
  templateUrl: './about-information.component.html'
})
export class AboutInformationComponent implements OnInit {


  form: FormGroup;

  protected validInput = true;
  protected successValid = false;
  constructor(private claimService: ClaimsService,
              private formBuilder: FormBuilder
              ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  createSubmit(): void {

    if(!this.form.valid){
      this.validInput = false;
    }
    if(this.form.valid){
      const formData = {
        name: this.form.value.name,
        phone: this.form.value.phone,
        description: this.form.value.description
      };
      this.claimService.createClaim({formData: formData}).subscribe();
      this.successValid = true;
    }

  }
  submit(){

  }
}
