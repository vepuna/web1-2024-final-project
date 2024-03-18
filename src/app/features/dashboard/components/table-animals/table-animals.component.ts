import { Component } from '@angular/core';
import {PostsService} from "../../../../core/services/posts.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../../../../shared/components/post/post.component";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {EditPostComponent} from "../edit-post/edit-post.component";
import {ModalService} from "../../../../core/services/modal.service";


@Component({
  selector: 'app-table-animals',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PostComponent,
    ImageUrlPipe,
    ModalComponent,
    EditPostComponent,
    AsyncPipe
  ],
  templateUrl: './table-animals.component.html'
})
export class TableAnimalsComponent {

  constructor(
    public postService: PostsService,
    public modalService: ModalService ) {}
  ngOnInit(): void {
    this.postService.getAll().subscribe(products => {
      console.log(products);
    });
  }

}
