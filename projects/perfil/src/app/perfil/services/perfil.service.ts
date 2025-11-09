import { Injectable } from '@angular/core';
import { PerfilModel } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private perfil: PerfilModel = {
    nombre: 'Usuario Demo',
    correo: 'usuario@demo.com'
  };

  constructor() { }

   getPerfil() {
    return this.perfil;
  }

  actualizarPerfil(nombre: string, correo: string) {
    this.perfil = { nombre, correo };
  }
}
