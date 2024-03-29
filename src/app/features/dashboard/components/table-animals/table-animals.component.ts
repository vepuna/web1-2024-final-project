import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PostsService} from "../../../../core/services/posts.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../../../../shared/components/post/post.component";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {EditPostComponent} from "../edit-post/edit-post.component";
import {ModalService} from "../../../../core/services/modal.service";
import {CreatePostComponent} from "../create-post/create-post.component";
import {ModalClaimsComponent} from "../../../../shared/components/modal-claims/modal-claims.component";
import {moveItemInArray} from "@angular/cdk/drag-drop";


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
    AsyncPipe,
    CreatePostComponent,
    ModalClaimsComponent
  ],
  templateUrl: './table-animals.component.html'
})
export class TableAnimalsComponent implements OnInit {

  constructor(
    public postService: PostsService,
    public modalService: ModalService ) {}
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getAll().subscribe(products => {
      console.log(products);
    });
  }

  protected readonly String = String;
}
