import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { UseradminService } from '../servicios/useradmin/useradmin.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formAdminCreate: FormGroup;
  formLoginAdmin: FormGroup;

  constructor(
    public formBuilderCreate: FormBuilder,
    public formBuilderLogin: FormBuilder,
    public ServicioAdminUser: UseradminService
  ) { }

  ngOnInit(): void {
    this.formAdminCreate = this.formBuilderCreate.group({
      rol: ['', Validators.required],
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
    this.formLoginAdmin = this.formBuilderLogin.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  crearUserAdmin(): void {
    this.ServicioAdminUser.createUserAdmin(this.formAdminCreate.value).subscribe(resp => {
      this.formAdminCreate.reset();
    },
      error => {
        console.error(error)
      }
    )
  }

  loginUserAdmin(): void {
    this.ServicioAdminUser.loginUserAdmin(this.formLoginAdmin.value).subscribe(resp => {
      this.formLoginAdmin.reset();
    },
      error => {
        console.error(error)
      }
    )
  }

}
