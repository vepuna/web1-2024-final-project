import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {HeaderPanelComponent} from "./components/header-panel/header-panel.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HeaderPanelComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
