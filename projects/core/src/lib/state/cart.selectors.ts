import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('carrito');

export const selectProductos = createSelector(
  selectCartState,
  state => state.productos
);

export const selectTotal = createSelector(
  selectProductos,
  productos =>
    productos.reduce((acc, p) => acc + p.precio * (p.cantidad ?? 1), 0)
);

export const selectTotalItems = createSelector(
  selectProductos,
  productos =>
    productos.reduce((acc, p) => acc + (p.cantidad ?? 1), 0)
);
