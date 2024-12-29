import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  // providers: [
  //   importProvidersFrom(BrowserAnimationsModule),
  // ],
  providers: [
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(routes),  // Provide router configuration
  ]
})
  .catch((err) => console.error(err));
