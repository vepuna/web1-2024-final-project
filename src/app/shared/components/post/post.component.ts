import {Component, Input} from '@angular/core';
import {IPosts} from "../../../core/models/posts.model";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {ImageUrlPipe} from "../../pipe/image-url.pipe";
import {ModalClaimsComponent} from "../modal-claims/modal-claims.component";
import {ModalComponent} from "../modal/modal.component";
import {ModalService} from "../../../core/services/modal.service";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ImageUrlPipe,
    AsyncPipe,
    ModalClaimsComponent,
    ModalComponent,
    NgIf
  ],
  templateUrl: './post.component.html'
})
export class PostComponent {
  constructor(protected modalService: ModalService) {
  }
  @Input() post: IPosts;
}
