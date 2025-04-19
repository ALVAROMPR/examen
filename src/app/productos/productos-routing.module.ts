import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PageProductosComponent } from './page-productos/page-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {
    path: '',
    component: PageProductosComponent,
    children: [
      {
        path: 'lista-productos',
        component: ListaProductosComponent,
      },
      {
        path: 'nuevo-producto',
        component: NuevoProductoComponent,
      },
      ///{
      ///  path: 'editar-usuario/:id',
      ///  component: EditarUsuariosComponent,
      ///},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
