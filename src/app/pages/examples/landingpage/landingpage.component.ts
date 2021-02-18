import { Component, OnInit, OnDestroy } from "@angular/core";
import { Configurar , Asignar} from './model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogBodyComponent}from '../dialog-body/dialog-body.component'
import {RespuestaComponent } from '../respuesta/respuesta.component'
@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})
export class LandingpageComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  focus2;
  result_sin_solucion="";
  hero=""
  isCollapsed = true;//para deslizar
  name="";
  color="";
  enpesar_juego= " "
  ocultarbtn=false
  ocultarText = true
  ocultarPosibleSolucion=false
  LISTA_ANIMALES = "cigarras abeja Pinguino aguila jirafa pulpo tigre elefante Medusa toro loro delfin piton cocodrilo gato leopardo mono cebra oveja rata buho araña rana oso_polar caracol tortuga conejo salmon rinoceronte zorro"
  MAMIFEROS    =                "0 0 0 0 1 0 1 1 0 1 0 1 0 0 1 1 1 1 1 1 0 0 0 1 0 0 1 0 1 1"
  ANIMALES_VOLADORES  =         "1 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0"
  ANIMALES_ACUATICOS     =      "0 0 1 0 0 1 0 0 1 0 0 1 0 1 0 0 0 0 0 0 0 0 1 1 0 1 0 1 1 0"
  PICO             =            "0 0 1 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0"

  ANIMALES_NOCTURNOS    =       "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1"
  ANIMALES_CAPARAZON         =  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0"
  ANIMALES_DESLIZANTES     =    "0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0"
  BIGOTE                =       "0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 1 0 0 1"

  PATAS                     =  "0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 1 0 0 1 0 0 1"
  RAYAS            =           "0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0"
  PIEL                =        "0 1 0 0 1 0 1 0 0 1 0 0 0 0 1 1 1 1 0 1 0 0 0 1 0 0 1 0 0 1"
  ANIMALES_CUATRO_PATAS   =    "0 0 0 0 1 0 1 1 0 1 0 0 0 1 1 1 1 1 1 1 0 0 1 1 0 1 1 0 1 1"

  ANIMALES_PICAN    =          "0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
  COLA                =        "0 0 1 0 1 0 1 1 0 1 0 0 0 1 1 1 1 1 1 1 0 0 0 1 0 0 1 0 1 1"
  ESCAMAS              =       "0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 0 0 1 0 1 0 0"
  CARNIVOROS          =        "0 0 1 1 0 1 1 0 1 0 0 1 1 1 1 1 1 1 0 1 1 1 1 1 0 0 0 0 0 1"

  MANCHAS               =      "0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
  BRANQUIAS                =   "0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0"
  CUERNOS               =      "0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
  PLUMAS             =         "0 0 1 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0"

  TOTAL_ANIMALESs   =   30
  EXIT_KEY       =     "exit"
  BUFFER_SIZE     =   32
  DEBUG_STATUS   =    0

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
 click : boolean = true;
//animales
animales_vect = [
  //{id: 1, name:'Zorro',imagen:'./assets/img/animales/zorro.jpg',descripcion: 'Mamifero '},
  {id: 2, name:'Toro',imagen:'./assets/img/animales/toro.jpg',descripcion: 'Mamifero '},
  {id: 3, name:'Tigre',imagen:'./assets/img/animales/tigre.jpg',descripcion: 'Mamifero '},
  {id: 4, name:'Elefante',imagen:'./assets/img/animales/elefante.jpg',descripcion: 'Mamifero '},

  {id: 5, name:'Cebra',imagen:'./assets/img/animales/cebra.jpg',descripcion: 'Mamifero '},
  {id: 6, name:'Cocodrilo',imagen:'./assets/img/animales/cocodrilo.jpg',descripcion: ' '},
  {id: 7, name:'Delfin',imagen:'./assets/img/animales/delfin.jpg',descripcion: 'Mamifero '},
  {id: 8, name:'Gato',imagen:'./assets/img/animales/gato.jpg',descripcion: 'Mamifero '},

  {id: 9, name:'Jirafa',imagen:'./assets/img/animales/jirafa.jpg',descripcion: 'Mamifero '},
  {id: 10, name:'Abeja',imagen:'./assets/img/animales/abeja.jpg',descripcion: 'Mamifero '},//
  {id: 11, name:'Pinguino',imagen:'./assets/img/animales/pinguino.jpg',descripcion: 'Mamifero '},
  {id: 12, name:'Pulpo',imagen:'./assets/img/animales/pulpo.jpg',descripcion: 'Mamifero '},

  {id: 13, name:'Piton',imagen:'./assets/img/animales/piton.jpg',descripcion: 'Mamifero '},
  {id: 14, name:'Toruga',imagen:'./assets/img/animales/tortuga.jpg',descripcion: 'Mamifero '},//
  {id: 15, name:'Rinoceronte',imagen:'./assets/img/animales/rinoceronte.jpg',descripcion: 'Mamifero '},
  {id: 16, name:'Salmon',imagen:'./assets/img/animales/salmon.jpg',descripcion: 'Mamifero '},

  {id: 17, name:'Conejo',imagen:'./assets/img/animales/conejo.jpg',descripcion: ' '},
  {id: 18, name:'Oso polar',imagen:'./assets/img/animales/oso_polar.jpg',descripcion: ' '},
  {id: 19, name:'Rana',imagen:'./assets/img/animales/rana.jpg',descripcion: ' '},
  {id: 20, name:'Araña',imagen:'./assets/img/animales/araña.jpg',descripcion: ' '},//

  {id: 21, name:'Buho',imagen:'./assets/img/animales/buho.jpg',descripcion: ' '},//
  {id: 22, name:'Rata',imagen:'./assets/img/animales/rata.jpg',descripcion: ' '},
  {id: 23, name:'Oveja',imagen:'./assets/img/animales/oveja.jpg',descripcion: ' '},
  {id: 24, name:'Mono',imagen:'./assets/img/animales/mono.jpg',descripcion: ' '},

  {id: 25, name:'Leopardo',imagen:'./assets/img/animales/leopardo.jpg',descripcion: ' '},
  {id: 26, name:'Medusa',imagen:'./assets/img/animales/Medusa.jpg',descripcion: ' '},
  {id: 27, name:'Aguila',imagen:'./assets/img/animales/aguila.jpg',descripcion: ' '},//
  {id: 28, name:'Cigarras',imagen:'./assets/img/animales/cigarras.jpg',descripcion: ' '},

  {id: 29, name:'Loro',imagen:'./assets/img/animales/loro.jpg',descripcion: ' '},
  {id: 30, name:'Caracol',imagen:'./assets/img/animales/caracol.jpg',descripcion: ' '},
 
];
  constructor(public dialog: MatDialog) {
    this.enpesar_juego= "EMPESEMOS !"
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    
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
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '250px',
      data: `Error no se pudo filtrar`,
      panelClass:''
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  openDialog2(description:any,nombre:any): void {
    const dialogRef = this.dialog.open(RespuestaComponent, {
      width: '400px',
      data: {decripcion: description, animal:nombre, foto:nombre}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  guesses = 0
  countador_click = 0;
  public iniciarJuego(){
    this.countador_click=0;
    this.llenarCarcteres()
    this.ocultarbtn=true
    this.ocultarText=false
    this.imprimir_animales()
    this.empesemosPreguntas("Nada")

  }

   public llenarCarcteres(){
    this.lista_animales = new Configurar().llenarMatrix(this.lista_animales,this.LISTA_ANIMALES)

    this.mamiferos = new Configurar().llenarMatrix(this.mamiferos,this.MAMIFEROS)
    this.animales_voladores = new Configurar().llenarMatrix(this.animales_voladores,this.ANIMALES_VOLADORES)
    this.animales_acuaticos = new Configurar().llenarMatrix(this.animales_acuaticos,this.ANIMALES_ACUATICOS)
    this.pico = new Configurar().llenarMatrix(this.pico,this.PICO)

    this.animales_nocturnos = new Configurar().llenarMatrix(this.animales_nocturnos,this.ANIMALES_NOCTURNOS)
    this.animales_caparazon = new Configurar().llenarMatrix(this.animales_caparazon,this.ANIMALES_CAPARAZON)
    this.animales_deslizantes = new Configurar().llenarMatrix(this.animales_deslizantes,this.ANIMALES_CAPARAZON)
    this.bigote = new Configurar().llenarMatrix(this.bigote,this.BIGOTE)

    this.patas = new Configurar().llenarMatrix(this.patas,this.PATAS)
    this.rayas = new Configurar().llenarMatrix(this.rayas,this.RAYAS)
    this.piel = new Configurar().llenarMatrix(this.piel,this.PIEL)
    this.animales_cuatro_patas = new Configurar().llenarMatrix(this.animales_cuatro_patas,this.ANIMALES_CUATRO_PATAS)
    

    this.animales_pican = new Configurar().llenarMatrix(this.animales_pican,this.ANIMALES_PICAN)
    this.cola = new Configurar().llenarMatrix(this.cola,this.COLA)
    this.escamas = new Configurar().llenarMatrix(this.escamas,this.ESCAMAS)
    this.carnivoros = new Configurar().llenarMatrix(this.carnivoros,this.CARNIVOROS)

    this.manchas = new Configurar().llenarMatrix(this.manchas,this.MANCHAS)
    this.branquias = new Configurar().llenarMatrix(this.branquias,this.BRANQUIAS)
    this.cuernos = new Configurar().llenarMatrix(this.cuernos,this.CUERNOS)
    this.plumas = new Configurar().llenarMatrix(this.plumas,this.PLUMAS)
    
   }

   public empesemosPreguntas(key:string){
  
      var pregun = new Asignar()
   
      var continue_game = 1
  
        this.guesses++
        switch(this.countador_click){
          case 0: this.preguntas="0: ¿Es tu animal un mamífero?--"
          break;
          case 1: pregun.respuestUs( this.preguntas= "1: ¿Tu animal vuela? ", this.mamiferos, key, this.lista_animales );
           console.log(this.lista_animales)
           break;
          case 2:pregun.respuestUs( this.preguntas="2: ¿Tu animal vive en el (agua y tierra) o en la tierra?", this.animales_voladores , key , this.lista_animales);
          console.log(this.lista_animales)
          break;
          case 3:pregun.respuestUs( this.preguntas= "3: ¿Tu animal tiene pico?", this.animales_acuaticos , key, this.lista_animales );
          break;
          case 4:pregun.respuestUs( this.preguntas= "4: ¿Es tu animal nocturno?", this.pico , key , this.lista_animales);
          console.log(this.lista_animales)
          break;
          case 5:
            pregun.respuestUs( this.preguntas= "5: ¿Tu animal tiene caparazón?", this.animales_nocturnos, key , this.lista_animales );
            console.log(this.lista_animales)
          break;
          case 6:
          pregun.respuestUs( this.preguntas= "6: ¿Tu animal se desliza?",this.animales_caparazon , key , this.lista_animales);
        console.log(this.lista_animales)
        break;
       case 7:
        pregun.respuestUs( this.preguntas= "7: ¿Tu animal tiene bigotes?", this.animales_deslizantes , key , this.lista_animales);
        break;
       case 8:
        pregun.respuestUs( this.preguntas= "8: ¿Tu animal tiene patas (Pie de animal con garras y almohadillas)?", this.bigote , key , this.lista_animales);
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
        pregun.respuestUs( this.preguntas= "12: ¿Puede picar tu animal?", this.animales_cuatro_patas, key , this.lista_animales );
        break;
       case 13:
        pregun.respuestUs( this.preguntas= "13:  ¿Tu animal tiene cola?", this.animales_pican, key , this.lista_animales );
        break;
       case 14:
        pregun.respuestUs( this.preguntas= "14: ¿Tu animal tiene escamas?", this.cola , key, this.lista_animales );
        break;
       case 15:
        pregun.respuestUs( this.preguntas= "15: ¿Tu animal es carnívoro?", this.escamas , key , this.lista_animales);
        break;
       case 16:
        pregun.respuestUs( this.preguntas= "16: ¿Tu animal tiene manchas estampadas?", this.carnivoros , key , this.lista_animales);
        break;
       case 17:
        pregun.respuestUs( this.preguntas= "17: ¿Tu animal tiene branquias?", this.manchas , key , this.lista_animales);
        break;
       case 18:
        pregun.respuestUs( this.preguntas= "18: ¿Tu animal tiene cuernos o colmillos?", this.branquias , key, this.lista_animales );
        break;
       case 19:
        pregun.respuestUs( this.preguntas= "19: ¿Tu animal tiene plumas?", this.cuernos , key, this.lista_animales );
        break;
       case 20:
        pregun.respuestUs( this.preguntas= "20: ¿Fin?", this.plumas , key , this.lista_animales);
        //this.animales_acua()
        break;
       case 21:
        this.preguntas="Felicidades, has ganado, no puedo adivinar tu animal"
        this.ocultarPosibleSolucion=true
        this.ocultarbtn=false
        this.animales_acua()
        break;
       default :
        /* Losing end of game condition that will be displayed if the program for some reason cannot guess your animal*/
        this.preguntas="Felicidades, has ganado, no puedo adivinar tu animal"
  
        /* Stop the game */
        continue_game = 0;
        break;
        }
        if(this.DEBUG_STATUS){
          pregun.MostrarAnimalesRestantes(this.lista_animales)
        }
        if(pregun.ContarAnimalesRestantes(this.lista_animales)==0){
            this.openDialog()
            this.llenarCarcteres()

        }
        if(pregun.ContarAnimalesRestantes(this.lista_animales)==1){
          var tortugas ="tortuga"
          this.preguntas= "Tomó "+this.countador_click+" intentos adivinar tu animal :: "+ this.lista_animales.find(element => element !=null) //pregun.mostrando_ultimo_animal(this.lista_animales)
          continue_game = 0;
         
          this.click = this.click;
          this.ocultarbtn=false;
          let description = "Tomó "+this.countador_click+" intentos adivinar tu animal :: ";
          let nombres=this.lista_animales.find(element => element !=null)
          this.openDialog2(description, nombres);
          this.countador_click=100
          this.enpesar_juego="VOLVER A JUGAR"
        }

        this.countador_click += 1;
        
       this.imprimir_animales()
    
  }


   imprimir_animales(){
      this.animales_restantes = new Asignar().MostrarAnimalesRestantes(this.lista_animales)
      this.animales_restantes= this.animales_restantes.filter(Boolean)
      return this.animales_restantes
   }
   animales_acua(){
    this.animales_restantes = new Asignar().MostrarAnimalesRestantes(this.lista_animales)

    this.posibles_soluciones = this.animales_restantes.filter(Boolean)
    console.log(this.posibles_soluciones)
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

}
