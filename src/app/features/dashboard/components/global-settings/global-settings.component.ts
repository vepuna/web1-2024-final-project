import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {GlobalService} from "../../../../core/services/global.service";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-global-settings',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './global-settings.component.html'
})
export class GlobalSettingsComponent implements OnInit {
  form: FormGroup;
  constructor(protected globalService: GlobalService,
              private formBuilder: FormBuilder,
              private authService: AuthService) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      phone_number: [this.globalService.global.phone_number, Validators.required],
      physical_address: [this.globalService.global.physical_address, Validators.required],
      weekday_schedule: [this.globalService.global.weekday_schedule, Validators.required],
      weekend_schedule: [this.globalService.global.weekend_schedule, Validators.required],
      telegram_url: [this.globalService.global.telegram_url, Validators.required],
      instagram_url: [this.globalService.global.instagram_url, Validators.required],
    });
    }

    updateSubmit(){
    const token = this.authService.getToken();
    if(this.form.valid){
      const formData = {
        phone_number: this.form.value.phone_number,
        physical_address: this.form.value.physical_address,
        weekday_schedule: this.form.value.weekday_schedule,
        weekend_schedule: this.form.value.weekend_schedule,
        telegram_url: this.form.value.telegram_url,
        instagram_url: this.form.value.instagram_url
      };
      console.log(formData);
      this.globalService.updateGlobal({formData: formData}, token).subscribe();
    }
    }
}
