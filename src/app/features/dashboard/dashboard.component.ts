import { Component } from '@angular/core';
import {TableAnimalsComponent} from "./components/table-animals/table-animals.component";
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {EditPostComponent} from "./components/edit-post/edit-post.component";
import {CreatePostComponent} from "./components/create-post/create-post.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableAnimalsComponent,
    ModalComponent,
    EditPostComponent,
    CreatePostComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
