import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {ModalClaimsComponent} from "../modal-claims/modal-claims.component";
import {ModalComponent} from "../modal/modal.component";
import {ModalService} from "../../../core/services/modal.service";
import {GlobalService} from "../../../core/services/global.service";


@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink, MatButtonModule, MatDividerModule, MatIconModule, NgOptimizedImage, AsyncPipe, ModalClaimsComponent, ModalComponent, NgIf
    ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  constructor(protected modalService: ModalService,
              protected globalService: GlobalService) {

  }
  ngOnInit() {
    this.globalService.getGlobal().subscribe();
  }


}
