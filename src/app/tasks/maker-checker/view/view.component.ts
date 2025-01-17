import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  constructor(private route:Router){}
  back_home(){
    this.route.navigate(['/mc']);
  }
}
