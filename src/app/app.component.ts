import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentUpZipDownComponent } from './tasks/document-up-zip-down/document-up-zip-down.component';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe';
}
