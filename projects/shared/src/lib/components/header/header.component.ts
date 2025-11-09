import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CommunicationService } from '@core-lib';
import { ProductoEvent } from '@models';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
   private comunicacion = inject(CommunicationService);

  // Observable que expone el número de productos en el carrito
  //esto devuelve un observable, para que se le en la plantilla, se añade la pipe async
  //con async se hace
//“Suscríbete a este Observable, muéstrame su valor actual en la vista,
//y cuando haya un nuevo valor, actualiza el DOM automáticamente.”
/**
 * angular en realidad por dentro hace algo así, pero al hacerlo él, nos quita trabajo
 * 
 * totalItems: number = 0;
private sub!: Subscription;

ngOnInit() {
  this.sub = this.totalItems$.subscribe(valor => {
    this.totalItems = valor;
  });
}

ngOnDestroy() {
  this.sub.unsubscribe();
}
 */

  totalItems$ = this.comunicacion.productos$.pipe(
    map((lista: ProductoEvent[]) => lista.reduce((acc, p) => acc + (p.cantidad ?? 1), 0))
  );

}
