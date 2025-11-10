import { createAction, props } from '@ngrx/store';
import { ProductoEvent } from '@models';

export const agregarProducto = createAction(
  '[Carrito] Agregar producto',
  props<{ producto: ProductoEvent }>()
);

export const vaciarCarrito = createAction('[Carrito] Vaciar carrito');

export const eliminarProducto = createAction(
  '[Carrito] Eliminar producto',
  props<{ id: number }>()
);

