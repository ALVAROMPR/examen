import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ProductosRoutingModule } from './productos-routing.module';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { PageProductosComponent } from './page-productos/page-productos.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    NuevoProductoComponent,
    PageProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class ProductosModule { }
