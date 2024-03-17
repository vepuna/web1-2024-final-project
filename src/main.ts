import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {importProvidersFrom} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)), provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ]
}).catch(err => console.error(err));
