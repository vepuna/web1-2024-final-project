import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-small-statistic',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './small-statistic.component.html'
})
export class SmallStatisticComponent {
  dateOfFounding: number = 2010;
  animalsFoundedHouse: number = 200;
  animalsInWaiting: number = 300;
  numberVolunteers: number = 100;
}
