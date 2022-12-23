import { ProductDetailsComponent } from './../product-details/product-details.component';
import { ProductFormComponent } from './../product-form/product-form.component';
import { CreateProductComponent } from './../create-product/create-product.component';
import { ProductListComponent } from './../product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule
  ]
})
export class CRUDModule { }