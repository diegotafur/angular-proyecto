//*************  MODELO BASADO EN CLASES ****************************
//METODOD 1 DE CREAR MODELO 
/* export class ProductoModelo {
    nombre: string
    descripcion: string

    constructor(nombre: string, descripcion: string){
        this.nombre = nombre
        this.descripcion = descripcion

    }
} */

//METODO 2 DE CREAR MODELO
export class ProductoModelo {
    constructor(public nombre: string, public descripcion: string) { }

    nombreEnMayusculas(): string {   // con eso dopsp untos espera un valor de retiorno
        return this.nombre.toUpperCase();
    }

}

//export default TableroModelo  esta es una manera de expotar

//*************  MODELO BASADO EN INTERFACES ****************************
