import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductoCardComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
