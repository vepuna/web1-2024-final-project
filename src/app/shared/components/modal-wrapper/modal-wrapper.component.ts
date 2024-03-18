import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../../core/services/modal.service";
import {IPosts} from "../../../core/models/posts.model";
import {EditPostComponent} from "../../../features/dashboard/components/edit-post/edit-post.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {PostsService} from "../../../core/services/posts.service";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-modal-wrapper',
  standalone: true,
  imports: [
    EditPostComponent,
    AsyncPipe,
    ModalComponent,
    NgIf
  ],
  templateUrl: './modal-wrapper.component.html'
})
export class ModalWrapperComponent implements OnInit {
  @Input() post: IPosts;
  @Input() index: number;
  isModalVisible: boolean = false;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
