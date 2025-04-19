import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  constructor(private dbService: NgxIndexedDBService) {}

  // Métodos para operaciones CRUD en usuarios
  async agregarUsuario(usuario: any): Promise<number> {
    const observable = this.dbService.add('usuarios', usuario);
    return await firstValueFrom(observable);
  }

  async obtenerUsuarios(): Promise<any[]> {
    const observable = this.dbService.getAll('usuarios');
    return await firstValueFrom(observable);
  }

  async eliminarUsuario(id: number): Promise<void> {
    const obser = this.dbService.delete('usuarios', id); 
    await firstValueFrom(obser);
  }

  // Métodos para operaciones CRUD en productos
  async agregarProducto(producto: any): Promise<number> {
    const observable = this.dbService.add('productos', producto); 
    return await firstValueFrom(observable);
  }

  async obtenerProductos(): Promise<any[]> {
    const observable = this.dbService.getAll('productos'); 
    return await firstValueFrom(observable);
  }

  async eliminarProducto(id: number): Promise<void> {
    const obs = this.dbService.delete('productos', id); 
    await firstValueFrom(obs);
  }

  // Métodos para operaciones CRUD en pedidos
  async agregarPedido(pedido: any): Promise<number> {
    const obs = this.dbService.add('pedidos', pedido);
    return await firstValueFrom(obs);
  }

  async obtenerPedidos(): Promise<any[]> {
    const obs = this.dbService.getAll('pedidos'); 
    return await firstValueFrom(obs);
  }

  async eliminarPedido(id: number): Promise<void> {
    const obs = this.dbService.delete('pedidos', id);
    await firstValueFrom(obs);
  }
}
