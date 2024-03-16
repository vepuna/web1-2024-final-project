import {Component, Input} from '@angular/core';
import {IPosts} from "../../../core/models/posts.model";

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html'
})
export class PostComponent {
  @Input() post: IPosts;
}
