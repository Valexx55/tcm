import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductosInterceptor } from '../interceptors/productos.interceptor';
import { ProductosService } from './services/productos.service';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductoCardComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductosService,
    { provide: HTTP_INTERCEPTORS, useClass: ProductosInterceptor, multi: true }
  ],
})
export class ProductosModule { }
