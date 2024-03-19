import { Component } from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {EditPostComponent} from "../edit-post/edit-post.component";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {ModalService} from "../../../../core/services/modal.service";

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    AsyncPipe,
    EditPostComponent,
    ModalComponent,
    NgIf
  ],
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent {

  constructor(protected modalService: ModalService) {

  }

  protected readonly String = String;
}
