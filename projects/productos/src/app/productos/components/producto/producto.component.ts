import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  // private comunicacion = inject(ComunicacionService);

   private productosService = inject(ProductosService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }


  agregarAlCarrito(p: any) {
    
  }
  //versión vieja
  /*agregarAlCarrito(p: any) {
    const evento: ProductoEvent = {
      id: p.id,
      nombre: p.nombre,
      precio: p.precio,
      cantidad: 1
    };
    // Emitimos el evento global
    this.comunicacion.emitirProductoAdded(evento);
    // (opcional) feedback al usuario
    // e.g. toast o alert
    console.log('Emitido evento producto añadido:', evento);
  }*/

    //versión nueva
  /*  agregarAlCarrito(p: ProductoEvent) {
    this.comunicacion.agregarProducto(p);
  }*/


}
