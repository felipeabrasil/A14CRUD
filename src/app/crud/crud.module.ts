import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderCrudComponent } from './header-crud/header-crud.component';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductFormComponent,
    ProductListComponent,
    HeaderCrudComponent,
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ]
})
export class CRUDModule { }
