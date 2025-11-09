import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // landing propia del micro (AppComponent pinta su HTML)
  { path: '', pathMatch: 'full', redirectTo: '' },

  // subruta al módulo de productos
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },

  // comodín opcional
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
