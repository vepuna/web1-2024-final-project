import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../../shared/components/post/post.component";
import {PostsService} from "../../core/services/posts.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-available-animals',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PostComponent,
    RouterLink
  ],
  templateUrl: './available-animals.component.html'
})
export class AvailableAnimalsComponent implements OnInit{
  constructor(
    public postService: PostsService) {}
  ngOnInit(): void {
    this.postService.getAll().subscribe(products => {
      console.log(products);
    });
  }
}
