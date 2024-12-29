import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideMenuComponent,NavComponent,SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
