import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'pipes';
  nombre:string="Hola"
  arreglo=[1,2,3,4,5,6,7,8,9,10]
  PI:number= Math.PI
  porcentaje:number = 0.23456789
  moneda:number=1523.85
  heroe:object ={
    nombre: "Hulk",
    bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",    
    aparicion: "1962-05-01",
    casa:"Marvel"
  }

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Promesa Recibida'),10000)
  })

  fecha:Date=new Date()

  nombre2:string = "gusTavo adolFo casiMiro piNzon"

  video:string="A5QnRdROL2w"
}
