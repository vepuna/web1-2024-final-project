import {Component, Input} from '@angular/core';
import {IPosts} from "../../../core/models/posts.model";
import {NgOptimizedImage} from "@angular/common";
import {ImageUrlPipe} from "../../pipe/image-url.pipe";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ImageUrlPipe
  ],
  templateUrl: './post.component.html'
})
export class PostComponent {
  @Input() post: IPosts;
}
