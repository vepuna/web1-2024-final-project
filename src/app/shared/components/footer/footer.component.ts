import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {GlobalService} from "../../../core/services/global.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(protected globalService: GlobalService) {}

}
