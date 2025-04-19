import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevos-usuarios',
  templateUrl: './nuevos-usuarios.component.html',
  styleUrls: ['./nuevos-usuarios.component.css']
})
export class NuevosUsuariosComponent implements OnInit {
  formUsuario!: FormGroup;
  nuevoUsuario = {
    nombre: '',
    apellido: '',
    ci: '',
    correo: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      ci: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], // Validación para 8 dígitos
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.formUsuario.valid) {
      console.log('Usuario Registrado:', this.formUsuario.value);
      // Aquí puedes agregar la lógica para enviar los datos a un servidor o procesarlos
    } else {
      console.log('Formulario inválido');
    }
  }
}
