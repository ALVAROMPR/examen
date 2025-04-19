import { Component,OnInit, } from '@angular/core';
import { IndexedDbService } from 'src/app/core/index-db/indexed-db.service';
import { PedidosService } from 'src/app/pedidos/pedidos.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {
  productos: any[] = [];
  usuarios: any[] = []; // Para la lista de usuarios
  usuarioSeleccionado: any = null;
  productoSeleccionado: any = null;
  pedidos: any[] = [];
  showModal: boolean = false;

  constructor(
    private indexedDbService: IndexedDbService,
    private pedidosService: PedidosService
  ) { }

  ngOnInit(): void {
    console.log('pedidos');
    this.cargarProductos();
    this.cargarUsuarios();
    this.cargarPedidos();
  }

  cargarProductos() {
    this.indexedDbService.obtenerProductos().then((data) => {
      this.productos = data;
    });
  }

  cargarUsuarios() {
    this.indexedDbService.obtenerUsuarios().then((data) => {
      this.usuarios = data;
    });
  }

  // registrarPedido() {
  //   console.log('Usuario seleccionado:', this.usuarioSeleccionado);
  //   console.log('Producto seleccionado:', this.productoSeleccionado);
  
  //   if (this.usuarioSeleccionado && this.productoSeleccionado) {
      
  //     const usuarioId = this.usuarioSeleccionado.id;
  //     const productoIds = [this.productoSeleccionado.id];  // Solo el ID del producto seleccionado
  
  //     console.log('Registrando pedido con usuario ID:', usuarioId);
  //     console.log('Registrando pedido con producto ID:', productoIds);
  
  //     this.pedidosService.agregarPedido(usuarioId, productoIds)
  //       .then(() => {
  //         alert('Pedido registrado correctamente');
  //         this.cerrarModal(); // Cerrar el modal después de registrar el pedido
  //         this.cargarPedidos(); // Recargar la lista de pedidos
  //       })
  //       .catch(error => {
  //         alert('Error al registrar el pedido: ' + error.message); // Mostrar error si ocurre
  //       });
  //   } else {
  //     alert('Por favor, selecciona un usuario y un producto');
  //   }
  // }
  /////registrarPedido() {
  /////  console.log('Usuario seleccionado:', this.usuarioSeleccionado);  // Verifica el usuarioId
  /////  console.log('Producto seleccionado:', this.productoSeleccionado);  // Verifica el productoId
  /////
  /////  if (this.usuarioSeleccionado && this.productoSeleccionado) {
  /////    console.log('dentro del if');
  /////    // Registrar el pedido con el usuario seleccionado y el producto
  /////    this.pedidosService.agregarPedido(this.usuarioSeleccionado, [this.productoSeleccionado])
  /////      .then(() => {
  /////        alert('Pedido registrado correctamente');
  /////        this.cerrarModal(); // Cerrar el modal después de registrar el pedido
  /////        this.cargarPedidos(); // Recargar la lista de pedidos
  /////      })
  /////      .catch(error => {
  /////        alert('Error al registrar el pedido: ' + error.message); // Mostrar error si ocurre
  /////      });
  /////  } else {
  /////    alert('Por favor, selecciona un usuario y un producto');
  /////  }
  /////}
  registrarPedido() {
    console.log('Usuario seleccionado:', this.usuarioSeleccionado);
    console.log('Producto seleccionado:', this.productoSeleccionado);
  
    if (this.usuarioSeleccionado != null && this.productoSeleccionado != null) {
      // 1) Busca el objeto Usuario en tu lista en memoria
      const idNum = typeof this.usuarioSeleccionado === 'string'
      ? parseInt(this.usuarioSeleccionado, 10)
      : this.usuarioSeleccionado;
      const usuario = this.usuarios.find(u => u.id === idNum);
      // 2) Busca el objeto Producto en tu lista en memoria
      const idProd = typeof this.productoSeleccionado === 'string'
      ? parseInt(this.productoSeleccionado, 10)
      : this.productoSeleccionado;
      const producto = this.productos.find(p => p.id === idProd);
  
      if (!usuario || !producto) {
        return alert('No encontramos el usuario o el producto.');
      }
  
      // 3) Construye el "pedido" pasando tanto IDs como nombres
      const nuevoPedido = {
        usuarioId: usuario.id,
        usuarioNombre: usuario.nombre,
        productoIds: [producto.id],
        productosNombres: [producto.nombre]
      };
  
      // 4) Llama al servicio
      this.pedidosService.agregarPedidoDirecto(nuevoPedido)
        .then(id => {
          alert('Pedido registrado con ID ' + id);
          this.cerrarModal();
          this.cargarPedidos();
        })
        .catch(err => alert('Error al registrar el pedido: '+err.message));
    } else {
      alert('Selecciona usuario y producto.');
    }
  }
  
  
  

  abrirModalPedir(producto: any) {
    this.productoSeleccionado = producto.id; // Almacenar el producto seleccionado
    this.showModal = true; // Mostrar el modal
  }

  cerrarModal() {
    this.showModal = false;
  }

  cargarPedidos() {
    this.pedidosService.obtenerPedidos().then((data) => {
      this.pedidos = data;
    });
  }

}
