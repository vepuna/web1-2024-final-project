import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {AsyncPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {ModalClaimsComponent} from "../modal-claims/modal-claims.component";
import {ModalComponent} from "../modal/modal.component";
import {ModalService} from "../../../core/services/modal.service";
import {GlobalService} from "../../../core/services/global.service";
import {TranslateModule, TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, MatButtonModule, MatDividerModule, MatIconModule, NgOptimizedImage, AsyncPipe, ModalClaimsComponent, ModalComponent, NgIf, TranslateModule, NgClass
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  currentLanguage: string;
  constructor(protected modalService: ModalService,
              protected globalService: GlobalService,
              private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang;
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
    this.currentLanguage = language;
  }
  ngOnInit() {
    this.globalService.getGlobal().subscribe();
  }


}
