import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../../core/services/posts.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../../../../shared/components/post/post.component";
import {ModalClaimsComponent} from "../../../../shared/components/modal-claims/modal-claims.component";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {ModalService} from "../../../../core/services/modal.service";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-available-animals',
  standalone: true,
  imports: [
    NgForOf, PostComponent, NgIf, AsyncPipe, ModalClaimsComponent, ModalComponent, RouterLink, TranslateModule
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
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
