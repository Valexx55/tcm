import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../productos/models/producto.model';

@Injectable()
export class ProductosInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Solo transformamos la respuesta de esta API
    if (req.url.includes('my-json-server.typicode.com/miseon920/json-api/products')) {
      return next.handle(req).pipe(
        map(event => {
          if (event instanceof HttpResponse && Array.isArray(event.body)) {
            const productos: Producto[] = event.body.map((item: any) => ({
              id: item.id,
              nombre: item.name,
              precio: Number(item.price)
            }));
            return event.clone({ body: productos });
          }
          return event;
        })
      );
    }
    // Otras URLs pasan tal cual
    return next.handle(req);
  }
}
