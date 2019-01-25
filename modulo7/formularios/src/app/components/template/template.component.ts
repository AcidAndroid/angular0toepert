import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`  
  .ng-invalid.ng-touched:not(form){
        border: 1px solid red
      }
  `]
})
export class TemplateComponent implements OnInit {

  usuariodefault:Object={
    nombre:null
    ,apellido:null
    ,email:null
    ,pais:''
    ,sexo:""
    ,acepta:false
  }

  usuariodefault1:Object={
    nombre:"nombre default"
    ,apellido:"apellido default"
    ,email:"default@default.com"
  }

  usuariodefault2:Object={
    nombre:"nombre default"
    ,apellido:"apellido default"
    ,email:"default@default.com"
  }

  paises:Object=[
    {
      codigo:'CRI'
      ,nombre:"Costa Rica"
    }
    ,
    {
      codigo:'MX'
      ,nombre:"Mexico"
    }
  ]


  sexos:Object=[{
    codigo:'HO'
    ,nombre:"Hombre"
  }
,{
  codigo:'MU'
  ,nombre:"Mujer"
},
{
  codigo:'OT'
  ,nombre:"Otro"
},
{
  codigo:''
  ,nombre:"SIN ESPECIFICAR"
}
]
  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Datos de ngForm",forma);        
    console.log("Valor campos:",forma.value);
    console.log("Obejto original:",this.usuariodefault);        
    
  }

  guardar2(forma:NgForm){
    console.log("Datos de ngForm",forma);        
    console.log("Valor campos:",forma.value);
    console.log("Obejto original:",this.usuariodefault1);        
    
  }
  guardar3(forma:NgForm){
    console.log("Datos de ngForm",forma);        
    console.log("Valor campos:",forma.value);
    console.log("Obejto original:",this.usuariodefault2);        
    
  }
}
