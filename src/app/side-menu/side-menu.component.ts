import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
interface routes {
  name: string;
  route?: string;
  children?: routes[];
  expandable: boolean;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,CommonModule,RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})


export class SideMenuComponent { 
  toggleName= 'open';
  navItems=[
    {name:'zip_document',route:'/task1'},
    {name:'others',route:'/others'},
  ]
  // showFiller = false;
  changeName(status:boolean){
    console.log(status);
    this.toggleName = status ? 'close' : 'open';
  }

  
}
