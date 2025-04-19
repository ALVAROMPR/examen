import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { firstValueFrom } from 'rxjs';

interface Usuario {
  id: number;
  nombre: string;
}

interface Producto {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private db: NgxIndexedDBService) {}

  // Método para agregar un pedido
  /////async agregarPedido(usuarioId: number, productoIds: number[]): Promise<number> {
  /////  // Obtener el usuario por su ID
  /////  console.log('agregar pedido');
  /////  console.log('usuarioId',usuarioId);
  /////  if (!usuarioId) {
  /////    throw new Error('Usuario no seleccionado o ID inválido');
  /////  }
  /////  const usuario = await firstValueFrom(this.dbService.getByKey('usuarios', usuarioId)) as Usuario;
  /////  if (!usuario) {
  /////    throw new Error('Usuario no encontradoooo');
  /////  }
  /////  console.log('usuarios',usuario);
  /////  console.log('productoIds',productoIds);
  /////  // Obtener los productos por sus IDs
  /////  const productos = await Promise.all(
  /////    productoIds.map(id => firstValueFrom(this.dbService.getByKey('productos', id))) as Promise<Producto>[]
  /////  );
  /////  console.log('productos', productos);
  /////  // Verificar si todos los productos existen
  /////  if (productos.some(p => !p)) {
  /////    throw new Error('Uno o más productos no encontrados');
  /////  }
/////
  /////  // Crear el pedido con los IDs de los productos y los nombres del usuario y los productos
  /////  const pedido = { 
  /////    usuarioId, 
  /////    usuarioNombre: usuario.nombre,  // Nombre del usuario
  /////    productoIds, // Guardar solo los IDs de los productos
  /////    productosNombres: productos.map(p => p.nombre)  // Nombres de los productos
  /////  };
/////
  /////  // Guardar el pedido en IndexedDB
  /////  const result = await firstValueFrom(this.dbService.add('pedidos', pedido));
  /////  return result.id;  
  /////}
  async agregarPedidoDirecto(pedido: {
    usuarioId: number,
    usuarioNombre: string,
    productoIds: number[],
    productosNombres: string[]
  }
): Promise<number> {
  console.log('Guardando pedido:', pedido);
  const res = await firstValueFrom(this.db.add('pedidos', pedido));
  //console.log('Pedido insertado con key:', res.key, res.id);
  return res.id;
}

  // Método para obtener todos los pedidos
  ////async obtenerPedidos(): Promise<any[]> {
  ////  const obs = this.dbService.getAll('pedidos');
  ////  const pedidos = await firstValueFrom(obs);
////
  ////  // Mapeamos los pedidos para incluir los nombres de los productos y usuarios
  ////  return pedidos.map((pedido: any) => ({
  ////    ...pedido,
  ////    usuarioNombre: pedido.usuarioNombre || 'Desconocido',
  ////    productosNombres: pedido.productosNombres || []
  ////  }));
  ////}
  async obtenerPedidos(): Promise<any[]> {
    return firstValueFrom(this.db.getAll('pedidos'));
  }
}
