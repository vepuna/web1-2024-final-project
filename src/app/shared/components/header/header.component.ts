import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, MatButtonModule, MatDividerModule, MatIconModule
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
