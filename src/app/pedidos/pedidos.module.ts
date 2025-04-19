import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { PedidosRoutingModule } from './pedidos-routing.module';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { PagePedidosComponent } from './page-pedidos/page-pedidos.component';


@NgModule({
  declarations: [
    NuevoPedidoComponent,
    PagePedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class PedidosModule { }
