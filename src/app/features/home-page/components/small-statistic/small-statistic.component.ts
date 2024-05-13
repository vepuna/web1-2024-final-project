import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-small-statistic',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './small-statistic.component.html'
})
export class SmallStatisticComponent {
  dateOfFounding: number = 2010;
  animalsFoundedHouse: number = 200;
  animalsInWaiting: number = 300;
  numberVolunteers: number = 100;
}
