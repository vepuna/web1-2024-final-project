import { Component } from '@angular/core';
import {TableAnimalsComponent} from "./components/table-animals/table-animals.component";
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {EditPostComponent} from "./components/edit-post/edit-post.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableAnimalsComponent,
    ModalComponent,
    EditPostComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
