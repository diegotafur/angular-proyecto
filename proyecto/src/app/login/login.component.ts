import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UsuarioModelo } from '../Modelos/usuario.modelo';
import { ProductoModelo } from '../producto/producto.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onCambioEstado = new EventEmitter()

  /*   usuarios: Array<UsuarioModelo> = [
      { id: "", usuario: "", password: "123456", correo: "diego@outlook.com" },
    ] */

  //Se crea sin variable por que esta fuera de un metodo  si esta dentro del un meotodo si se necesita asiganarle uin variable ejemplo con
  usuario: UsuarioModelo = {
    id: '',
    usuario: '',
    password: '123456',
    correo: 'diego'
  }
  constructor() { }

  ngOnInit() {
  }

  /* @ViewChild("correo", { static: false }) correoUsuario: ElementRef
  @ViewChild("password", { static: false }) passwordUsuario: ElementRef
 */
  correo: string = ""
  password: string = ""
  login() {

    /*    const usuario: UsuarioModelo =
       {
         password: '123456',
         correo: 'diego@outlook.com'
       } */

    /*     if (this.correoUsuario.nativeElement.value == "") {
          alert('Ingrese su Correo');
          return;
        }
        if (this.passwordUsuario.nativeElement.value == "") {
          alert('Ingrese su Password');
          return;
        }
        if (this.correoUsuario.nativeElement.value == this.usuario.correo && this.passwordUsuario.nativeElement.value == this.usuario.password) {
          this.onCambioEstado.emit(true)
        }
        else {
          alert('Usuario o Contraseña no son correctos.');
        } */

    if (this.correo.trim() == "") {
      alert('Ingrese su Correo');
      return;
    }
    if (this.password.trim() == "") {
      alert('Ingrese su Password');
      return;
    }
    if (this.correo == this.usuario.correo && this.password == this.usuario.password) {
      this.onCambioEstado.emit(true)
    }
    else {
      alert('Usuario o Contraseña no son correctos.');
    }

  }

}
