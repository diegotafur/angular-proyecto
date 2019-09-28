import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductoModelo } from './producto.modelo';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: ProductoModelo //ya no es un json{}
  @Input() indice: number
  @Output() onEliminar = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  eliminar() {
    this.onEliminar.emit(this.indice)
  }

}
