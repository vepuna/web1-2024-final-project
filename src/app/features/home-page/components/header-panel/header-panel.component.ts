import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header-panel',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header-panel.component.html'
})
export class HeaderPanelComponent {

}
