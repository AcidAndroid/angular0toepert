import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta:string="alert-danger"
  propiedades={
    danger:false
  }
  loading:boolean=false
  constructor() { }

  ngOnInit() {
  }

  cambiarClase(){
    this.propiedades.danger=!this.propiedades.danger
  }

  ejecutar(){
   
    this.loading=true
    console.log(this.loading)
    setTimeout(() => {
      this.loading=false
    },5000);
  }

}
