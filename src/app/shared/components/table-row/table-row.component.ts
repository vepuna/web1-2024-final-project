import {Component, Input} from '@angular/core';
import {PostsService} from "../../../core/services/posts.service";
import {NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../post/post.component";
import {IPosts} from "../../../core/models/posts.model";
import {ImageUrlPipe} from "../../pipe/image-url.pipe";

@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [NgForOf, PostComponent, NgIf, ImageUrlPipe],
  templateUrl: './table-row.component.html'
})
export class TableRowComponent {
  @Input() post: IPosts;

}
