import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { ImageSlideshowComponent } from '../../components/image-slideshow/image-slideshow.component'
import { ProductInfoComponent } from '../../components/product-info/product-info.component'
import { MaterialModule } from '../../material-module'
import { ProductCommentComponent } from '../../components/product-comment/product-comment.component'
import { HeaderBarComponent } from '../../components/header-bar/header-bar.component'
import { SideMenuComponent } from '../../components/side-menu/side-menu.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    MaterialModule
  ],
  declarations: [
    ProductDetailPage,
    ImageSlideshowComponent,
    ProductInfoComponent,
    ProductCommentComponent,
    HeaderBarComponent,
    SideMenuComponent
  ]
})
export class ProductDetailPageModule { }
