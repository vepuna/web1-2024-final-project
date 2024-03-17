import { Component } from '@angular/core';
import {PostsService} from "../../../../core/services/posts.service";
import {NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../../../../shared/components/post/post.component";
import {TableRowComponent} from "../../../../shared/components/table-row/table-row.component";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";

@Component({
  selector: 'app-table-animals',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PostComponent,
    TableRowComponent,
    ImageUrlPipe
  ],
  templateUrl: './table-animals.component.html'
})
export class TableAnimalsComponent {
  constructor(
    public postService: PostsService) {}
  ngOnInit(): void {
    this.postService.getAll().subscribe(products => {
      console.log(products);
    });
  }

}
