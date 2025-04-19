import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { PagePedidosComponent } from './page-pedidos/page-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: PagePedidosComponent,
    children:[
      {
        path: 'nuevo-pedido',
        component: NuevoPedidoComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
