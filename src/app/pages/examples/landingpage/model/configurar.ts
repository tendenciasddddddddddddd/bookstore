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
     public llenarMatrix(vector_animal: any,carateristicas_animal:string){
            var SEPARADOR  = " "
            var animal;
            var   index;
            var numero_total_animales   =   30
            animal = carateristicas_animal.split(SEPARADOR)
            for(index = 0; index < numero_total_animales; index++ ){
               vector_animal[ index ] = animal[ index ];
            }
            return vector_animal

     }
    
}