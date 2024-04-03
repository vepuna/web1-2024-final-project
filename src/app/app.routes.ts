import { Routes } from '@angular/router';
import {HomePageComponent} from "./features/home-page/home-page.component";
import {LoginComponent} from "./features/login/login.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {authGuard} from "./core/guards/auth.guard";
import {AvailableAnimalsComponent} from "./features/available-animals/available-animals.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  { path: 'available-animals', component: AvailableAnimalsComponent, canActivate: [authGuard]},
];
