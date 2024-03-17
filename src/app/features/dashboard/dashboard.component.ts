import { Component } from '@angular/core';
import {TableAnimalsComponent} from "./components/table-animals/table-animals.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableAnimalsComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

}
