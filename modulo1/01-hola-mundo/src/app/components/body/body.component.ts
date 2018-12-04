import { Component  } from "@angular/core";

@Component ({
    selector:"app-body",
    templateUrl:"./body.component.html"
})

export class BodyComponent {

    mostrar=false

    frase:any ={
        mensaje:"Un gran poder trae una gran responsabilidad."
        ,autor:"Ben Parker"
    }

    personajes:string[] =['Spiderman','Venom','Silk']

}