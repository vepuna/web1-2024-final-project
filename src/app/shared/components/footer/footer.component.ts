import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  protected phoneNumber = "+37379923225";
  protected location = "Бельцы, Молдова";
  protected weekDaySchedule = "Пн-Пт: с 08:00 до 19:00";
  protected weekEndsSchedule = "Сб-Вс: с 10:00 до 15:00";
}
