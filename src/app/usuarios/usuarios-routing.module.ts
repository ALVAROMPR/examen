import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevosUsuariosComponent } from './nuevos-usuarios/nuevos-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { PageUsuariosComponent } from './page-usuarios/page-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: PageUsuariosComponent ,
    children: [
      {
        path: 'lista-usuario',
        component: ListaUsuariosComponent,
      },
      {
        path: 'nuevo-usuario',
        component: NuevosUsuariosComponent,
      },
      {
        path: 'editar-usuario/:id',
        component: EditarUsuariosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
