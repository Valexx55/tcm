import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: '', component: ProductoComponent } // /productos -> lista de productos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
