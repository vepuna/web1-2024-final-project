import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {ModalClaimsComponent} from "../modal-claims/modal-claims.component";
import {ModalComponent} from "../modal/modal.component";
import {ModalService} from "../../../core/services/modal.service";


@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink, MatButtonModule, MatDividerModule, MatIconModule, NgOptimizedImage, AsyncPipe, ModalClaimsComponent, ModalComponent, NgIf
    ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(protected modalService: ModalService) {
  }

}
