import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public sideMenu: SideMenuComponent;
  public menuController: MenuController = new MenuController();
  constructor() {
    
  }

  ngOnInit() {
    
  }

  toggleSideMenu() {
    this.sideMenu = new SideMenuComponent(this.menuController);
    this.sideMenu.openFirst();
  }
}
