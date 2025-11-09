import { Injectable } from '@angular/core';
import { ProductoEvent } from '@models';
import { BehaviorSubject, map, Observable, ReplaySubject, Subject } from 'rxjs';

const STORAGE_KEY = 'carrito_productos';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //private productoAddedSubject = new Subject<ProductoEvent>();
  //private productoAddedSubject = new BehaviorSubject<ProductoEvent|null>(null);
  //private productoAddedSubject = new ReplaySubject<ProductoEvent>(1);
  private productoAddedSubject = new BehaviorSubject<ProductoEvent[]>([]);
  //con la notación $ indicamos que es un observable
  productos$ = this.productoAddedSubject.asObservable();
  
  
  productoAdded = this.productoAddedSubject.asObservable()

   readonly total$ = this.productos$.pipe(
    map(productos =>
      productos.reduce((acc, p) => acc + p.precio * (p.cantidad ?? 1), 0)
    )
  );

  //propina, que lo programen ellos
  readonly totalItems$ = this.productos$.pipe(
  map(productos =>
    productos.reduce((acc, p) => acc + (p.cantidad ?? 1), 0)
  )
);

  

/*
constructor() {
    console.log('🛰️ Nueva instancia de ComunicacionService creada');
  }*/

    //nuevo constructor con local storage

    constructor() {
    // 🔹 1. Leer el estado inicial del localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    const inicial: ProductoEvent[] = stored ? JSON.parse(stored) : [];

    // 🔹 2. Crear BehaviorSubject con ese valor inicial
    this.productoAddedSubject = new BehaviorSubject<ProductoEvent[]>(inicial);
    this.productos$ = this.productoAddedSubject.asObservable();

    console.log('🛰️ CommunicationService inicializado con', inicial);
  }

  //nuevo método de mejora
   private persistir(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.productoAddedSubject.value));
  }

  //nuevas versiónes de agregareliminar y vaciar prodcuto con local storage
   agregarProducto(producto: ProductoEvent): void {
    const actual = this.productoAddedSubject.value;
    const idx = actual.findIndex(p => p.id === producto.id);

    if (idx > -1) {
      actual[idx].cantidad = (actual[idx].cantidad || 1) + 1;
      this.productoAddedSubject.next([...actual]);
    } else {
      this.productoAddedSubject.next([...actual, { ...producto, cantidad: 1 }]);
    }

    this.persistir(); // 💾 guardar cada vez que cambie
  }

  eliminarProducto(id: number): void {
    const actual = this.productoAddedSubject.value.filter(p => p.id !== id);
    this.productoAddedSubject.next(actual);
    this.persistir();
  }

  vaciarProductos(): void {
    this.productoAddedSubject.next([]);
    localStorage.removeItem(STORAGE_KEY); // 🧹 limpio almacenamiento
  }

  /**válido con las 3 primerras pero no con el BHS [] */
  /*emitirProductoAdded(producto: ProductoEvent) {
    this.productoAddedSubject.next(producto);
  }*/
 /*agregarProducto(producto: ProductoEvent) {
    const actual = this.productoAddedSubject.value;
    const idx = actual.findIndex(p => p.id === producto.id);

    if (idx > -1) {
      // si ya existe, incrementamos cantidad
      actual[idx].cantidad = (actual[idx].cantidad || 1) + 1;
      this.productoAddedSubject.next([...actual]);
    } else {
      // añadimos nuevo producto
      /**
       * Copia el array actual (...actual).

Crea un nuevo objeto producto con cantidad: 1.

Crea un nuevo array combinando ambos.

Emite ese nuevo array por el BehaviorSubject.

✅ De esta forma, no alteras el array original, y cualquier suscriptor recibe una nueva referencia (Angular lo detecta y actualiza la vista).

si sólo hacemos push, no se modifica la referencia y angular puede no tdetecetar ningún cambio
y por tanto, no propagar la reacción ante el cambio de estado
       */
   /*   this.productoAddedSubject.next([...actual, { ...producto, cantidad: 1 }]);
    }
  }*/

   // Eliminar un producto del carrito
  /*eliminarProducto(id: number) {
    const actual = this.productoAddedSubject.value.filter(p => p.id !== id);
    this.productoAddedSubject.next(actual);
  }

  // Vaciar la lista
  vaciarProductos() {
    this.productoAddedSubject.next([]);
  }*/

  // Obtener el total (por conveniencia)
  /*getTotal() {
    return this.productoAddedSubject.value.reduce(
      (acc, p) => acc + p.precio * (p.cantidad ?? 1),
      0
    );
  }*/
  // service


}
