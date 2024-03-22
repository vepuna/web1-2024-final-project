import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {HeaderPanelComponent} from "./components/header-panel/header-panel.component";
import {SmallStatisticComponent} from "./components/small-statistic/small-statistic.component";
import {AvailableAnimalsComponent} from "./components/available-animals/available-animals.component";
import {ModalService} from "../../core/services/modal.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HeaderPanelComponent, SmallStatisticComponent, AvailableAnimalsComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {



}
