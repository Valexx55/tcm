import { Component, inject } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  private perfilService = inject(PerfilService);
  perfil: any;

  ngOnInit(): void {
    this.perfil = this.perfilService.getPerfil();
  }


}
