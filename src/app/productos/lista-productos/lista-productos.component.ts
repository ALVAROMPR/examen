import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexedDbService } from 'src/app/core/index-db/indexed-db.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{
  productos: any[] = [];
  nuevoProducto: {nombre: string, precio: string, imagen: string} = {
    nombre: '',
    precio:'',
    imagen: ''
  };
  @ViewChild('fileInput') fileInput: any;

  constructor(private indexedDbService: IndexedDbService) { }

  ngOnInit(): void {
    console.log('lista de productos');
    this.cargarProductos();
  }

  abrirSelectorDeArchivo() {
    this.fileInput.nativeElement.click(); // Simula el click en el input[type="file"]
  }

  onImageSelected(event: any) {
    console.log('ingreso a onImageSelected');
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Guardar la imagen como Data URL
        this.nuevoProducto.imagen = reader.result as string;
      };
      reader.readAsDataURL(file); // Lee el archivo como Data URL
    }
  }

  agregarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.precio && this.nuevoProducto.imagen ) {
      // Crear objeto producto
      const producto = { 
        nombre: this.nuevoProducto.nombre, 
        precio: this.nuevoProducto.precio,
        imagen: this.nuevoProducto.imagen,
      };
      
      // Agregar producto a IndexedDB
      this.indexedDbService.agregarProducto(producto).then(() => {
        this.cargarProductos();
        
        // Limpiar formulario después de agregar el usuario
        this.nuevoProducto = { nombre: '', precio: '', imagen: ''};
      });
    }
  }

  cargarProductos() {
    this.indexedDbService.obtenerProductos().then((data) => {
      this.productos = data;
    });
  }

  eliminarProducto(id: number) {
    this.indexedDbService.eliminarProducto(id).then(() => {
      this.cargarProductos();
    });
  }
}
