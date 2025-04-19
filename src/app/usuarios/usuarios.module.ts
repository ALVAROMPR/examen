import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevosUsuariosComponent } from './nuevos-usuarios/nuevos-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { PageUsuariosComponent } from './page-usuarios/page-usuarios.component';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    NuevosUsuariosComponent,
    EditarUsuariosComponent,
    PageUsuariosComponent
  ],
  imports: [
    CommonModule, 
    UsuariosRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
})
export class UsuariosModule {}
