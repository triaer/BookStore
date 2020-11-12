import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor( public menuController: MenuController ) { 

  }

  ngOnInit() {}

  openFirst() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
    
  }
}
