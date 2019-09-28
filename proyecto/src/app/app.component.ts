import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appProyecto';
  usuarioLogueado: boolean = false

  estadoUsuario(estado: boolean) {
    this.usuarioLogueado = estado
  }

  logout(){
    this.usuarioLogueado = false
  }
}
