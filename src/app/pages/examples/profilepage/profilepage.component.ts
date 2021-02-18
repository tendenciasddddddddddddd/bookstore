import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
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
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
