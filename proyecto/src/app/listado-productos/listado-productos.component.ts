import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductoModelo } from '../producto/producto.modelo';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  //Porducto de tipo array
  //productos: Array<{}> = []

  //Este es el modelo en base con lo que se trabajo de la carpeat modelos
  productos: ProductoModelo[] =
    [
      //new ProductoModelo("Producto 1", "Descripcion 1"),
      //new ProductoModelo("Producto 2", "Descripcion 2"),
      //new ProductoModelo("Producto 3", "Descripcion 3"),
    ]

  constructor() { }

  ngOnInit() {
  }

  /*Usando variables desde el html*/
  /* @ViewChild("nombre", { static: false }) nombreProducto: ElementRef
  @ViewChild("descripcion", { static: false }) descripcionProducto: ElementRef */

  /*USANDO ngmodel, inicializar siempre las variable por que si no genera un comportamiento extraño */
  nombre: string = ""
  descripcion: string = ""


  agregar() {
    //Esta es la forma correcta con un modelo 
    //const producto: ProductoModelo = new ProductoModelo(`Producto ${this.productos.length + 1}`, `Descripción ${this.productos.length + 1}`)
    /*{
      nombre: `Producto ${this.productos.length+1}`,
      descripcion: `Descripción ${this.productos.length+1}`
    } */

    /* if (this.nombreProducto.nativeElement.value == "") {
      alert("Ingrese nombre");
      return;
    }
    if (this.descripcionProducto.nativeElement.value == "") {
      alert("Ingrese descripcion");
      return;
    }
    const producto: ProductoModelo = new ProductoModelo(this.nombreProducto.nativeElement.value, this.descripcionProducto.nativeElement.value)

    this.productos.unshift(producto)
    //Limpias las cajas de texto
    this.nombreProducto.nativeElement.value = "";
    this.descripcionProducto.nativeElement.value = "" */

    /*CON NGMODEL*/
    if (this.nombre.trim() == "") {
      alert("Ingrese nombre");
      return;
    }
    if (this.descripcion.trim() == "") {
      alert("Ingrese descripcion");
      return;
    }
    const producto: ProductoModelo = new ProductoModelo(this.nombre, this.descripcion)

    this.productos.unshift(producto)
    //Limpias las cajas de texto
    this.nombre = "";
    this.descripcion = ""
  }

  eliminar(indice: number) {
    this.productos.splice(indice, 1)
  }
}
