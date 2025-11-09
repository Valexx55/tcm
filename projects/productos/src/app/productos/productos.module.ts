import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './components/producto/producto.component';


@NgModule({
  declarations: [
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
