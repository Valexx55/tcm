import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  //{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  
  { path: 'productos', loadChildren: () => import('productos/Module').then(m => m.ProductosModule) },
  { path: 'carrito', loadChildren: () => import('carrito/Module').then(m => m.CarritoModule) },
  { path: 'perfil', loadChildren: () => import('perfil/Module').then(m => m.PerfilModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
