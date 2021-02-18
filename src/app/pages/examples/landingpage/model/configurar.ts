import { Injectable } from '@angular/core';


@Injectable()
export class Configurar {
   
  
    constructor(
        ){
            // var animal;
            // var   index;
            // animal = this.carater.split(this.separador)
            // for(index = 0; index < this.numero_total_animales; index++ ){
            //   this.vector_animal[ index ] = animal[ index ];
            // }
            // console.log(this.vector_animal)
            //--------------------   
    }
     public llenarArreglo_caracteristicas(vector_animal: any , carateristicas_animal:string){//llega un arreglo vacio y el string
            var SEPARADOR  = " "
            var animal;
            var   index;
            var numero_total_animales   =   30//tope de animales
            animal = carateristicas_animal.split(SEPARADOR)//se separa por los espacios vacios
            for(index = 0; index < numero_total_animales; index++ ){
               vector_animal[ index ] = animal[ index ];
            }
            return vector_animal//devolvemos el arreglo lleno con las caracteristicas de los animales 

     }
    
}