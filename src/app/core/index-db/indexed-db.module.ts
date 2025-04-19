import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MiBaseDeDatos',
  version: 1,
  objectStoresMeta: [
    {
      store: 'usuarios',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'nombre', keypath: 'nombre', options: { unique: false } },
        { name: 'apellido', keypath: 'apellido', options: { unique: false } },
        { name: 'ci', keypath: 'ci', options: { unique: false } },
        { name: 'correo', keypath: 'correo', options: { unique: false } }
      ]
    },
    // {
    //   store: 'productos',
    //   storeConfig: { keyPath: 'id', autoIncrement: true },
    //   storeSchema: [
    //     { name: 'nombre', keypath: 'nombre', options: { unique: false } },
    //     { name: 'precio', keypath: 'precio', options: { unique: false } }
    //   ]
    // },
    // {
    //   store: 'pedidos',
    //   storeConfig: { keyPath: 'id', autoIncrement: true },
    //   storeSchema: [
    //     { name: 'usuarioId', keypath: 'usuarioId', options: { unique: false } },
    //     { name: 'productoIds', keypath: 'productoIds', options: { unique: false } }
    //   ]
    // }
  ]
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  exports: [NgxIndexedDBModule]
})
export class IndexedDbModule { }
