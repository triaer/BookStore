import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { ImageSlideshowComponent } from '../../components/image-slideshow/image-slideshow.component'
import { ProductInfoComponent } from '../../components/product-info/product-info.component'
import { ProductDescriptionComponent } from '../../components/product-description/product-description.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule
  ],
  declarations: [
    ProductDetailPage,
    ImageSlideshowComponent,
    ProductInfoComponent,
    ProductDescriptionComponent
  ]
})
export class ProductDetailPageModule { }
