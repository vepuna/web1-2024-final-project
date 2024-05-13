import { Component } from '@angular/core';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {ModalClaimsComponent} from "../../../../shared/components/modal-claims/modal-claims.component";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {ModalService} from "../../../../core/services/modal.service";
import {GlobalService} from "../../../../core/services/global.service";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header-panel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    ModalClaimsComponent,
    ModalComponent,
    NgIf,
    TranslateModule
  ],
  templateUrl: './header-panel.component.html'
})
export class HeaderPanelComponent {
  constructor(protected modalService: ModalService,
              protected globalService: GlobalService,
              private translate: TranslateService) {
  }

}
