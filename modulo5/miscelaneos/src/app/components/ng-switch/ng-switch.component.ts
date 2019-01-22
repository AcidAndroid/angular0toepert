import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta:string="info"
  colores=['primary','secondary','success','danger','warning','info','light','dark']
  colorNum=0

  constructor() { }

  ngOnInit() {
  }

  cambiarColor(){

    this.colorNum=this.colorNum+1
    if (this.colorNum>this.colores.length-1) {
      this.colorNum=0
    }
    this.alerta=this.colores[this.colorNum]
    console.log(this.colores[this.colorNum])

  }
}
