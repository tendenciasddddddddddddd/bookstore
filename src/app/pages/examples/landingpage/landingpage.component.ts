import { Component, OnInit, OnDestroy } from "@angular/core";
import { Configurar , Asignar} from './model';//llamar clases
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';//crear modal
import {DialogBodyComponent}from '../dialog-body/dialog-body.component'
import {RespuestaComponent } from '../respuesta/respuesta.component'
@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})
export class LandingpageComponent implements OnInit, OnDestroy {
  focus;//diseño
  focus1;//diseño
  focus2;//diseño
  result_sin_solucion="";//diseño
  hero=""
  isCollapsed = true;//para deslizar
  name="";
  color="";
  enpesar_juego= " "
  ocultarbtn=false
  ocultarCorrectoIncorrecto =false
  ocultarText = true
  oculatarCuestionario= true
  ocultarPosibleSolucion=false
  LISTA_ANIMALES = "cigarras abeja pinguino aguila jirafa pulpo tigre elefante Medusa toro loro delfin piton cocodrilo gato leopardo mono cebra oveja rata buho araña rana oso_polar caracol tortuga conejo salmon hipopótamo zorro"
  MAMIFEROS    =                "0 0 0 0 1 0 1 1 0 1 0 1 0 0 1 1 1 1 1 1 0 0 0 1 0 0 1 0 1 1"
  ANIMALES_VOLADORES  =         "1 1 0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0"
  ANIMALES_ACUATICOS     =      "0 0 1 0 0 1 0 0 1 0 0 1 0 1 0 0 0 0 0 0 0 0 1 1 0 1 0 1 1 0"
  PICO             =            "0 0 1 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0"

  ANIMALES_NOCTURNOS    =       "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1"
  ANIMALES_CAPARAZON         =  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0"
  ANIMALES_DESLIZANTES     =    "0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0"
  BIGOTE                =       "0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 1 0 0 1"

  PATAS                     =   "0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 1 0 0 1 0 0 1"
  RAYAS            =            "0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0"
  PIEL                =         "0 1 0 0 1 0 1 0 0 1 0 0 0 0 1 1 1 1 0 1 0 1 0 1 0 0 1 0 0 1"
  ANIMALES_CUATRO_PATAS   =     "0 0 0 0 1 0 1 1 0 1 0 0 0 1 1 1 1 1 1 1 0 0 1 1 0 0 1 0 1 1"

  ANIMALES_PICAN    =           "0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0"
  COLA                =         "0 0 1 0 1 0 1 1 0 1 0 0 0 1 1 1 1 1 1 1 0 0 0 1 0 0 1 0 1 1"
  ESCAMAS              =        "0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0"
  CARNIVOROS          =         "0 0 1 1 0 1 1 0 1 0 0 1 1 1 1 1 1 0 0 1 1 1 1 1 0 1 0 0 1 1"

  MANCHAS               =       "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
  BRANQUIAS                =    "0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0"
  CUERNOS               =       "0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
  PLUMAS             =          "0 0 1 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0"

  TOTAL_ANIMALESs   =   30

  lista_animales =[]
  mamiferos = []
  animales_voladores = []
  animales_acuaticos = []
  pico = []
  animales_nocturnos = []
  animales_caparazon = []
  animales_deslizantes = []
  bigote = []
  patas = []
  rayas = []
  piel = []
  animales_cuatro_patas = []
  animales_pican = []
  cola = []
  escamas = []
  carnivoros = []
  manchas = []
  branquias = []
  cuernos = []
  plumas = []
//gaelia

  animales_restantes =[]
  posibles_soluciones=[]
  pregunta="Preciona si es correcto o no si está incorrecto:  "
  preguntas="Dale clic en empezar!!"
  preguntass="!!"
  click : boolean = true;
  countador_click = 0;

  constructor(public dialog: MatDialog) {
    this.enpesar_juego= "EMPECEMOS !"
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];//para el dieño todo
    
    body.classList.add("landing-page");

    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
   
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
  
  openDialog(): void {//cuando el usuario conteste incoherencias
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '250px',
      data: `Error no se pudo filtrar`,
      panelClass:''
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  openDialog2(description:any,nombre:any): void {//cuando quese solo un animal es decir el resultado
    const dialogRef = this.dialog.open(RespuestaComponent, {
      width: '400px',
      data: {decripcion: description, animal:nombre, foto:nombre}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  
  
  public iniciarJuego(){//inicializa juego llenando los datos
    
    this.countador_click=0;//contador de las preguntas
    this.llenarCarcteres()//llenar los arregols
    
    this.imprimir_animales()
    localStorage.clear();
    this.empesemosPreguntas("Nada")
    this.ocultarobj()
  }
  
 
   public llenarCarcteres(){
    var cf = new Configurar()//llamamos a la clase configurar
    this.lista_animales = cf.llenarArreglo_caracteristicas(this.lista_animales,this.LISTA_ANIMALES)

    this.mamiferos = cf.llenarArreglo_caracteristicas(this.mamiferos,this.MAMIFEROS)
    this.animales_voladores = cf.llenarArreglo_caracteristicas(this.animales_voladores,this.ANIMALES_VOLADORES)
    this.animales_acuaticos = cf.llenarArreglo_caracteristicas(this.animales_acuaticos,this.ANIMALES_ACUATICOS)
    this.pico = cf.llenarArreglo_caracteristicas(this.pico,this.PICO)

    this.animales_nocturnos = cf.llenarArreglo_caracteristicas(this.animales_nocturnos,this.ANIMALES_NOCTURNOS)
    this.animales_caparazon = cf.llenarArreglo_caracteristicas(this.animales_caparazon,this.ANIMALES_CAPARAZON)
    this.animales_deslizantes = cf.llenarArreglo_caracteristicas(this.animales_deslizantes,this.ANIMALES_DESLIZANTES)
    this.bigote = cf.llenarArreglo_caracteristicas(this.bigote,this.BIGOTE)

    this.patas = cf.llenarArreglo_caracteristicas(this.patas,this.PATAS)
    this.rayas = cf.llenarArreglo_caracteristicas(this.rayas,this.RAYAS)
    this.piel = cf.llenarArreglo_caracteristicas(this.piel,this.PIEL)
    this.animales_cuatro_patas = cf.llenarArreglo_caracteristicas(this.animales_cuatro_patas,this.ANIMALES_CUATRO_PATAS)
    
    this.animales_pican = cf.llenarArreglo_caracteristicas(this.animales_pican,this.ANIMALES_PICAN)
    this.cola = cf.llenarArreglo_caracteristicas(this.cola,this.COLA)
    this.escamas = cf.llenarArreglo_caracteristicas(this.escamas,this.ESCAMAS)
    this.carnivoros = cf.llenarArreglo_caracteristicas(this.carnivoros,this.CARNIVOROS)

    this.manchas = cf.llenarArreglo_caracteristicas(this.manchas,this.MANCHAS)
    this.branquias = cf.llenarArreglo_caracteristicas(this.branquias,this.BRANQUIAS)
    this.cuernos = cf.llenarArreglo_caracteristicas(this.cuernos,this.CUERNOS)
    this.plumas = cf.llenarArreglo_caracteristicas(this.plumas,this.PLUMAS)
   }

   public empesemosPreguntas(key:string){
  
      var pregun = new Asignar()//llamamos a la clase asignar
   

        switch(this.countador_click){

          case 0: this.preguntas="0: ¿Es tu animal un mamífero? "
          break;
          case 1: pregun.respuestUs( this.preguntas= "1: ¿Tu animal vuela? ", this.mamiferos, key, this.lista_animales );
           break;
          case 2:pregun.respuestUs( this.preguntas="2: ¿Tu animal vive solo en el agua o en la tierra y en el agua?", this.animales_voladores , key , this.lista_animales);
          break;
          case 3:pregun.respuestUs( this.preguntas= "3: ¿Tu animal tiene pico?", this.animales_acuaticos , key, this.lista_animales );
          break;
          case 4:pregun.respuestUs( this.preguntas= "4: ¿Tu animal es nocturno?", this.pico , key , this.lista_animales);
          break;
          case 5:
            pregun.respuestUs( this.preguntas= "5: ¿Tu animal tiene caparazón?", this.animales_nocturnos, key , this.lista_animales );
          break;
          case 6:
           pregun.respuestUs( this.preguntas= "6: ¿Tu animal se desliza?",this.animales_caparazon , key , this.lista_animales);
          break;
          case 7:
           pregun.respuestUs( this.preguntas= "7: ¿Tu animal tiene vibrisas (bigotes)?", this.animales_deslizantes , key , this.lista_animales);
          break;
          case 8:
           pregun.respuestUs( this.preguntas= "8: ¿Tu animal tiene ( garras con almohadillas)?", this.bigote , key , this.lista_animales);
          break;
          case 9:
           pregun.respuestUs( this.preguntas= "9: ¿Tu animal tiene rayas?", this.patas , key , this.lista_animales);
          break;
          case 10:
           pregun.respuestUs( this.preguntas= "10: ¿Tu animal tiene pelo?", this.rayas , key, this.lista_animales );
          break;
          case 11:
           pregun.respuestUs( this.preguntas= "11: ¿Tu animal tiene cuatro patas?", this.piel, key  , this.lista_animales);
          break;
          case 12:
           pregun.respuestUs( this.preguntas= "12: ¿Tu animal puede picar ?", this.animales_cuatro_patas, key , this.lista_animales );
          break;
          case 13:
           pregun.respuestUs( this.preguntas= "13:  ¿Tu animal tiene cola?", this.animales_pican, key , this.lista_animales );
          break;
          case 14:
           pregun.respuestUs( this.preguntas= "14: ¿Tu animal tiene escamas?", this.cola , key, this.lista_animales );
          break;
          case 15:
           pregun.respuestUs( this.preguntas= "15: ¿Tu animal es omnivoros o carnívoro?", this.escamas , key , this.lista_animales);
          break;
          case 16:
           pregun.respuestUs( this.preguntas= "16: ¿Tu animal tiene manchas estampadas?", this.carnivoros , key , this.lista_animales);
          break;
          case 17:
           pregun.respuestUs( this.preguntas= "17: ¿Tu animal tiene branquias?", this.manchas , key , this.lista_animales);
          break;
          case 18:
           pregun.respuestUs( this.preguntas= "18: ¿Tu animal tiene cuernos o colmillos gigantes?", this.branquias , key, this.lista_animales );
          break;
          case 19://valido hasta aqui
           pregun.respuestUs( this.preguntas= "19: ¿Tu animal tiene plumas?", this.cuernos , key, this.lista_animales );
          break;
          case 20:
           pregun.respuestUs( this.preguntas= "20: ¿ha finalizado?", this.plumas , key , this.lista_animales);
          break;
          case 21:
           this.preguntass="Felicidades, has ganado, no puedo adivinar tu animal"
           this.ocultarPosibleSolucion=true
           this.ocultarbtn=false
           this.animales_acua()
          break;
       default :
        /*Perdiendo la condición de fin de juego que se mostrará si el programa por alguna razón no puede adivinar su animal */
         this.preguntas="Felicidades, has ganado, no puedo adivinar tu animal"
  
        /* termino juegp */
        
        break;
        }
       
        if(pregun.ContarAnimalesRestantes(this.lista_animales)==0){
            this.openDialog()
            this.llenarCarcteres()

        }
        if(pregun.ContarAnimalesRestantes(this.lista_animales)==1){
        
          this.preguntass= " Estoy sospechando que es ::: "+ this.lista_animales.find(element => element !=null) //pregun.mostrando_ultimo_animal(this.lista_animales)
          this.ocultarCorrectoIncorrecto=true
          this.oculatarCuestionario=false
          this.click = this.click;
          this.ocultarbtn=false;
          let description = "Tomó "+this.countador_click+" intentos y como resultados tenemos :: ";
          let nombres=this.lista_animales.find(element => element !=null)
          this.openDialog2(description, nombres);
          this.enpesar_juego="VOLVER A JUGAR"
        }

        this.countador_click += 1;
        
       this.imprimir_animales()
    
  }


   imprimir_animales(){//mostrar todos los animales que tengo en el arreglo
      this.animales_restantes = new Asignar().MostrarAnimalesRestantes(this.lista_animales)
      this.animales_restantes= this.animales_restantes.filter(Boolean)
      return this.animales_restantes
   }
   animales_acua(){
    this.animales_restantes = new Asignar().MostrarAnimalesRestantes(this.lista_animales)

    this.posibles_soluciones = this.animales_restantes.filter(Boolean)
    console.log(this.posibles_soluciones)
   }






   //posibles soluciones si el animal no es adivinado+++++++++++++++++++++++++++++++++++

   correcto(){
    this.ocultarCorrectoIncorrecto=false
    this.oculatarCuestionario=true
     this.preguntas="Muy bien intenta jugar otra vez"
    

   }
   incorrecto(){
    this.llenarCarcteres()
    this.ocultarCorrectoIncorrecto=false
    this.ocultarbtn=true
    
    this.oculatarCuestionario=true
   }
   resultadoss(){
     if(this.result_sin_solucion==""){
      alert("no se envio nada")
     }else{
      console.log(this.hero)
     }

     
   }
   radioChangeHandler(gender: any) {
    this.result_sin_solucion=gender
    console.log(gender);
  }
  ocultarobj(){
    this.ocultarbtn=true
    this.ocultarText=false
    this.ocultarPosibleSolucion=false
    this.ocultarCorrectoIncorrecto=false
    this.oculatarCuestionario=true
  }
}
