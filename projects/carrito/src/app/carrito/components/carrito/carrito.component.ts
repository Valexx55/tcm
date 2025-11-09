import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommunicationService } from '@core-lib';
import { Subscription } from 'rxjs';
import { ProductoEvent } from '@models';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent /*implements OnInit*/ {
  
  //versión de a uno
  private carritoService: CarritoService = inject(CarritoService)

  private comunicacion = inject(CommunicationService);

  
  carrito: any[] = [];
  //total = 0; comentamos con BHS []
  //private sub!: Subscription; con BHS [] ya no hace falta

  

  /*v0 con subject tb funciona con Replay*/
  /*ngOnInit() {
    this.cargarCarrito();

    // suscribirnos a eventos globales
    this.sub = this.comunicacion.productoAdded.subscribe((evento: ProductoEvent) => {
      // Añadimos el producto usando el servicio del módulo (aislado)
      const productoParaAgregar = { ...evento }; // copia por seguridad
      // Si quieres, puedes comprobar duplicados y aumentar cantidad:
      this.carritoService.agregarProducto(productoParaAgregar);
      // recargar estado local
      this.cargarCarrito();
      console.log('Carrito: recibido evento y agregado', productoParaAgregar);
    });
  }*/

    //esta funciona con BHS null y Replay pero no con BHS []
    /*
  ngOnInit() {
    this.cargarCarrito();

    // suscribirnos a eventos globales
    this.sub = this.comunicacion.productoAdded.subscribe((evento: ProductoEvent|null) => {
      // Añadimos el producto usando el servicio del módulo (aislado)
      if (evento)
      {
        const productoParaAgregar = { ...evento }; // copia por seguridad
      // Si quieres, puedes comprobar duplicados y aumentar cantidad:
      this.carritoService.agregarProducto(productoParaAgregar);
      // recargar estado local
      this.cargarCarrito();
      console.log('Carrito: recibido evento y agregado', productoParaAgregar);
      } else 
      {
        console.log("Vino un null")
      }
      
    });
  }

  
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  cargarCarrito() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.total = this.carritoService.getTotal();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.cargarCarrito();
  }*/

   
  productos$ = this.comunicacion.productos$;
  total$ = this.comunicacion.total$;
  items$ = this.comunicacion.totalItems$;


  vaciarCarrito() {
    this.comunicacion.vaciarProductos();
  }

  /*get total() {
    return this.comunicacion.getTotal();
  }*/

  /**
   * hacemos una mejora para que en caso de que cambie un elemento de 
   * la lista y haya que repintarlo no se repinten todos sino que se lo actualizo los alimentos que cambiaron realmente reutilizando el resto
   * @param _index 
   * @param item 
   * @returns 
   */
  trackById(_index: number, item: any): number {
  return item.id;
}

}
