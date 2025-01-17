import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maker-checker',
  standalone: true,
  imports: [],
  templateUrl: './maker-checker.component.html',
  styleUrl: './maker-checker.component.css'
})
export class MakerCheckerComponent {

  constructor(private route:Router){}
  go_View(){
    this.route.navigate(['/mc/view']);
  }
}

