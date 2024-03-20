import {Component, OnInit} from '@angular/core';
import {TableAnimalsComponent} from "./components/table-animals/table-animals.component";
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {EditPostComponent} from "./components/edit-post/edit-post.component";
import {CreatePostComponent} from "./components/create-post/create-post.component";
import { initFlowbite } from 'flowbite';
import {TableClaimsComponent} from "./components/table-claims/table-claims.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {ModalService} from "../../core/services/modal.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableAnimalsComponent,
    ModalComponent,
    EditPostComponent,
    CreatePostComponent,
    TableClaimsComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  modalService: ModalService;
  ngOnInit(): void {
    initFlowbite();
  }
}
