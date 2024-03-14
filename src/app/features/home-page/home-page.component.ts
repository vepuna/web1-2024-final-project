import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {HeaderPanelComponent} from "./components/header-panel/header-panel.component";
import {SmallStatisticComponent} from "./components/small-statistic/small-statistic.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HeaderPanelComponent, SmallStatisticComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
