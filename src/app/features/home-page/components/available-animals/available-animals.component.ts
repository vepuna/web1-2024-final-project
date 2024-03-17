import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../../core/services/posts.service";
import {NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../../../../shared/components/post/post.component";

@Component({
  selector: 'app-available-animals',
  standalone: true,
  imports: [
    NgForOf, PostComponent, NgIf
  ],
  templateUrl: './available-animals.component.html'
})
export class AvailableAnimalsComponent implements OnInit  {
constructor(
  public postService: PostsService) {}
  ngOnInit(): void {
    this.postService.getAll().subscribe(products => {
      console.log(products);
    });
  }

}
