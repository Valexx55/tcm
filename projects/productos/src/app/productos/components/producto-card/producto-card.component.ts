import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {
  @Input() producto!: Producto;  // Recibe el producto desde el padre
  @Output() agregar = new EventEmitter<Producto>(); // Emite al padre

  onAgregar() {
    this.agregar.emit(this.producto);
  }
}
