import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
//import * as CartActions from '@core-lib/state/cart.actions';
import { ProductoEvent } from '@models';

export interface CartState {
  productos: ProductoEvent[];
}

//para q sea compatible con localSt
const stored = localStorage.getItem('carrito_productos');
export const initialState: CartState = {
  //productos: [],
  productos: stored ? JSON.parse(stored) : []
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.agregarProducto, (state, { producto }) => {
    const existe = state.productos.find(p => p.id === producto.id);
    const productos = existe
      ? state.productos.map(p =>
          p.id === producto.id
            ? { ...p, cantidad: (p.cantidad ?? 1) + 1 }
            : p
        )
      : [...state.productos, { ...producto, cantidad: 1 }];
    return { ...state, productos };
  }),
  on(CartActions.vaciarCarrito, () => ({ productos: [] })),
  on(CartActions.eliminarProducto, (state, { id }) => ({
  ...state,
  productos: state.productos.filter(p => p.id !== id)
})),

);
