import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  
  constructor(private menuController: MenuController) {
    
  }

  ngOnInit() { }

  openFirst() {
    this.menuController.toggle("first");
  }
}
