import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { CiudadesService } from './servicios/ciudades/ciudades.service';
import { ClientesService } from './servicios/clientes/clientes.service';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OcupacionesService } from './servicios/ocupaciones/ocupaciones.service';
import { ErrorStateMatcher } from '@angular/material/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
  }
/*
  formularioCliente: FormGroup;
  ciudades: any;
  clientes: any;
  ocupaciones: any;
  currentTimeInMilliseconds=Date.now();


  constructor(
    public form: FormBuilder,
    public ServicioCiudades: CiudadesService,
    public ServicioClientes: ClientesService,
    public ServicioOcupaciones: OcupacionesService
  ) {

  }


  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


  ngOnInit(): void {
    this.formularioCliente = this.form.group({
      idenficacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo_electronico: ['', [Validators.required, Validators.email]],
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

    this.ServicioOcupaciones.getAllOcupaciones().subscribe(resp => {
      this.ocupaciones = resp;
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
      this.clientes = this.clientes.filter((cliente: { id: any; })=> resp.id!==cliente.id)
      this.clientes.push(resp);
    },
      error => {
        console.error(error)
      }
    )
  }

  borrar(cliente:any){
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

  editar(cliente:any){
    this.formularioCliente.setValue({
      idenficacion: cliente.idenficacion,
      nombres: cliente.nombres,
      apellidos: cliente.apellidos,
      correo_electronico: cliente.correo_electronico,
      telefono: cliente.telefono,
      fecha_nacimiento: cliente.fecha_nacimiento,
      ocupacion: cliente.ocupacion,
      ciudad: cliente.ciudad,
    })
  }
*/
}
