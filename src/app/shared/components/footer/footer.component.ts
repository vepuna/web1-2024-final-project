import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {GlobalService} from "../../../core/services/global.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(protected globalService: GlobalService) {}
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
