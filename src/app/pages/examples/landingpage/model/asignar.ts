

export class Asignar {
  
    constructor(){
             
    }

    public mostrando_ultimo_animal(lista_de_animales= []){//muestra el ultimo animal del arreglo(solucion)
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
    public ContarAnimalesRestantes(lista_de_animales: any){//si no advina el sistema nos dara resultados de posibles animales
        var numero_total_animales=30
        var animals_remaining = 0;
        var index;
        for(index=0; index < numero_total_animales; index++){
          if ( lista_de_animales[ index ] != null )
          animals_remaining++;
        }
        return animals_remaining;
    }
    public MostrarAnimalesRestantes(lista_de_animales: any){//imprimir los animales que sobran
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
        this.cuando_usuario_respone(key)
        var preguntas
        var numero_total_animales=30
        if(key == "Nada"){//boton empezar
          preguntas="quieres empezar"
        }else if(key=="Si"||key=="No"){
          var  index;
          preguntas=question//envia pregunta
          var nombre=key   

          for(index = 0; index < numero_total_animales; index++){
              if(lista_animales[ index ] != null ){//validamos que el arreglo no sea vacio
                 if(nombre=="Si"){
                    if(animalData[ index ] != 1){//todos los animales diferente de uno se eliminan(=0)
                      lista_animales[ index ] = null
                    }
                 }else if(nombre=="No"){//todos los animales con valor igual a uno se eliminan
                   if(animalData[ index ] == 1){
                     lista_animales[ index ] = null
                   }
      
                 }
                 
              }
          }return preguntas
        }return "none"
       }

       cuando_usuario_respone(RESPUESTA:string){
        let puntuaciones_usuario = [{
         
          respuestas: RESPUESTA
        }]
        let optenerDatos = localStorage.getItem('Resultados')
        if (optenerDatos == null) {
          localStorage.setItem("Resultados", JSON.stringify(puntuaciones_usuario));
        } else {
          let datas = JSON.parse(optenerDatos)
          let newCar = {  respuestas: RESPUESTA}
          datas.push(newCar)
          localStorage.setItem('Resultados', JSON.stringify(datas))
        }
       }
}