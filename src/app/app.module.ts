import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexedDbService } from './core/index-db/indexed-db.service';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot({
      name: 'MiBaseDeDatos',
      version: 6,
      objectStoresMeta: [
        {
          store: 'usuarios',
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
            { name: 'nombre', keypath: 'nombre', options: { unique: false } },
            { name: 'apellido', keypath: 'apellido', options: { unique: false } },
            { name: 'ci', keypath: 'ci', options: { unique: false } },
            { name: 'correo', keypath: 'correo', options: { unique: true } }
          ]
        },
        {
          store: 'productos',
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
            { name: 'nombre', keypath: 'nombre', options: { unique: false } },
            { name: 'precio', keypath: 'precio', options: { unique: false } },
            { name: 'imagen', keypath: 'imagen', options: { unique: false } }
          ]
        },
        {
          store: 'pedidos',
          storeConfig: { keyPath: 'id', autoIncrement: true },
          storeSchema: [
            { name: 'usuarioId', keypath: 'usuarioId', options: { unique: false } },
            { name: 'productoIds', keypath: 'productoIds', options: { unique: false } },
            { name: 'usuarioNombre', keypath: 'usuarioNombre', options: { unique: false } },
            { name: 'productosNombres', keypath: 'productosNombres', options: { unique: false } },
          ]
        }
      ]
    })
  ],
  providers: [IndexedDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
