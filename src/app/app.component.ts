import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadesService } from './servicios/ciudades/ciudades.service';
import { ClientesService } from './servicios/clientes/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  formularioCliente: FormGroup;
  ciudades: any;
  clientes: any;


  constructor(
    public form: FormBuilder,
    public ServicioCiudades: CiudadesService,
    public ServicioClientes: ClientesService
  ) {

  }

  ngOnInit(): void {
    this.formularioCliente = this.form.group({
      idenficacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo_electronico: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      ocupacion: ['', Validators.required],
      ciudad: ['', Validators.required]
    });

    this.ServicioCiudades.getAllCiudades().subscribe(resp => {
      this.ciudades = resp;
    },
      error => {
        console.error(error)
      }
    );
    
    this.ServicioClientes.getAllClientes().subscribe(resp => {
      this.clientes = resp;
    },
      error => {
        console.error(error)
      }
    );

  }

  guardar(): void {
    this.ServicioClientes.guardarCliente(this.formularioCliente.value).subscribe(resp => {
      this.formularioCliente.reset();
      this.clientes.push(resp);
    },
      error => {
        console.error(error)
      }
    )
  }

  borrar(cliente:any): void {
    this.ServicioClientes.borrarCliente(cliente.idenficacion).subscribe(resp => {
     if(resp){
       this.clientes.pop(cliente);
     }

    },
      error => {
        console.error(error);
      }
    )
  }


}
