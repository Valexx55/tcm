import { Injectable } from '@angular/core';
import { CarritoItem } from '../models/carrito-item';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito : CarritoItem[] = [
    { id: 1, nombre: 'Laptop', cantidad: 1, precio: 1200 },
    { id: 2, nombre: 'Teclado', cantidad: 2, precio: 80 },
  ];

  constructor() {
    console.log('🛒 CarritoDataService inicializado');
  }

  obtenerCarrito() {
    return this.carrito;
  }

  //versión inicial
 agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  /*
  agregarProducto(producto: any) {
  const idx = this.carrito.findIndex(i => i.id === producto.id);
  if (idx > -1) {
    this.carrito[idx].cantidad += producto.cantidad ?? 1;
  } else {
    this.carrito.push({...producto, cantidad: producto.cantidad ?? 1});
  }
}*/

  vaciarCarrito() {
    this.carrito = [];
  }

  getTotal() {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }
}
