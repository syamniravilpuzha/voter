import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  activeNav='item-list';
  constructor() {
    
   }
   /**
    * Set active navigation menu
    * @param menu 
    * @returns {void}
    */
   setActiveNav(menu:string):void{
    this.activeNav = menu;
   }

}
