import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

 /*private productos = [
    { id: 1, nombre: 'Teclado', precio: 45 },
    { id: 2, nombre: 'Monitor', precio: 120 },
    { id: 3, nombre: 'Ratón', precio: 20 }
  ];

  getProductos() {
    console.log('📦 ProductosService ejecutado');
    return this.productos;
  }*/

    // API externa simulada
  private apiUrl = 'https://my-json-server.typicode.com/miseon920/json-api/products';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de productos desde la API remota.
   * El interceptor se encargará de transformar la respuesta
   * al modelo local { id, nombre, precio }.
   */
  getProductos(): Observable<Producto[]> {
    console.log('📦 ProductosService → solicitando datos desde API');
    return this.http.get<Producto[]>(this.apiUrl);
  }
  
}
