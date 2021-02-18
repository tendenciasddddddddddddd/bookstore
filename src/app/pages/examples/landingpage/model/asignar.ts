

export class Asignar {
  
    constructor(){
             
    }

    public mostrando_ultimo_animal(lista_de_animales= []){
        var indice
        var numero_total_animales=30
        for(indice=0; indice<numero_total_animales; indice++){
           if(lista_de_animales[indice]!=null){
             var result = lista_de_animales.find(element => element !=null)
             return result
           }else{
             return null;
           }
        }return null;
    }
    public ContarAnimalesRestantes(lista_de_animales: any){
        var numero_total_animales=30
        var animals_remaining = 0;
        var index;
        for(index=0; index < numero_total_animales; index++){
          if ( lista_de_animales[ index ] != null )
          animals_remaining++;
        }
        return animals_remaining;
    }
    public MostrarAnimalesRestantes(lista_de_animales: any){
        var index
        var numero_total_animales=30
        console.log("Animales restantes")
        for(index = 0; index < numero_total_animales; index++){
             if(lista_de_animales[ index ] != null ){
              lista_de_animales[ index ]
             }
        }
        return lista_de_animales
      }
      public respuestUs(question:string,animalData:any, key:string, lista_animales: any){
        console.log(key)
        var preguntas
        var numero_total_animales=30
        if(key =="Nada"){
          preguntas="quieres empezar"
        }else if(key=="Si"||key=="No"){
          //var buffer=[ this.BUFFER_SIZE ];
          var  index;
          preguntas=question//envia pregunta
          
          var nombre=key
          for(index = 0; index < numero_total_animales; index++){
              if(lista_animales[ index ] != null ){
                 if(nombre=="Si"){
                    if(animalData[ index ] != 1){
                      lista_animales[ index ] = null
                    }
                 }else if(nombre=="No"){
                   if(animalData[ index ] == 1){
                     lista_animales[ index ] = null
                   }
      
                 }
                 
              }
          }return preguntas
        }return "none"
       }
}