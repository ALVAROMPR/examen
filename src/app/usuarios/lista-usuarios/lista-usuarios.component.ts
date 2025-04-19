import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from 'src/app/core/index-db/indexed-db.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  nuevoUsuario: { nombre: string, 
                  apellido: string,
                  ci: string,
                  correo: string,
                } = { 
                  nombre: '', 
                  apellido: '',
                  ci:'',
                  correo: '', 
                };
  // users = [
  //   { id: 1, nombre: 'Juan', apellido: 'Pérez', ci: '12345678', correo: 'juan.perez@mail.com' },
  //   { id: 2, nombre: 'Ana', apellido: 'Gómez', ci: '23456789', correo: 'ana.gomez@mail.com' },
  //   { id: 3, nombre: 'Carlos', apellido: 'López', ci: '34567890', correo: 'carlos.lopez@mail.com' },
  // ];

  constructor(private indexedDbService: IndexedDbService) { }

  ngOnInit(): void {
    console.log('lista de usuarios');
    this.cargarUsuarios();
  }
  agregarUsuario() {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.apellido && this.nuevoUsuario.ci && this.nuevoUsuario.correo) {
      // Crear objeto usuario
      const usuario = { 
        nombre: this.nuevoUsuario.nombre, 
        apellido: this.nuevoUsuario.apellido,
        ci: this.nuevoUsuario.ci,
        correo: this.nuevoUsuario.correo
      };
      
      // Agregar usuario a IndexedDB
      this.indexedDbService.agregarUsuario(usuario).then(() => {
        this.cargarUsuarios();
        
        // Limpiar formulario después de agregar el usuario
        this.nuevoUsuario = { nombre: '', apellido: '', ci: '', correo: '' };
      });
    }
  }

  cargarUsuarios() {
    this.indexedDbService.obtenerUsuarios().then((data) => {
      this.usuarios = data;
    });
  }
  eliminarUsuario(id: number) {
    this.indexedDbService.eliminarUsuario(id).then(() => {
      this.cargarUsuarios();
    });
  }
}
