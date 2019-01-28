import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup
  formaValidacionAnidada:FormGroup
  formaValidacionSimple:FormGroup
  forma1:FormGroup


  usuario:Object={
    nombreCompleto:{
      nombre:"Gustavo"
      ,apellido:"Casimiro"
    }
    ,correo:"pop@pop.com"    
  }

  constructor() { 

    console.log(this.usuario);

    this.forma= new FormGroup(
      {
        'nombreCompleto': new FormGroup(
                                        {
                                        'nombre': new FormControl('',[Validators.required,Validators.minLength(5)])
                                        ,'apellido': new FormControl('',[Validators.required,Validators.minLength(5)])
                                        }
                                      )
        ,'correo': new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
      }
    )

    this.formaValidacionAnidada= new FormGroup(
      {
        'nombreCompleto': new FormGroup(
                                        {
                                        'nombre': new FormControl('',[Validators.required,Validators.minLength(5)])
                                        ,'apellido': new FormControl('',[Validators.required,Validators.minLength(5)])
                                        }
                                      )
        ,'correo': new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
      }
    )

    //Carga los valores por default del objeto ; debe tener la mista estrucutura
    this.formaValidacionAnidada.setValue(this.usuario)
    
    this.formaValidacionSimple= new FormGroup({
      'nombre': new FormControl('',[Validators.required,Validators.minLength(5)])
      ,'apellido': new FormControl('',[Validators.required,Validators.minLength(5)])
      ,'correo': new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    })


    this.forma1= new FormGroup({
      'nombre': new FormControl('nombredefault')
      ,'apellido': new FormControl()
      ,'correo': new FormControl()
    })

  }


  ngOnInit() {
  }


  guardar(){
    console.log('Valor forma:',this.forma);
    console.log('Valor campos:',this.forma.value);
    //Esta instruccion resetea la forma a su forma original
    this.forma.reset() // a un objeto vacion
    // this.forma.reset(this.usuario)//a un objeto por default
  }
  guardar2(){
    console.log('Valor forma:',this.formaValidacionSimple);
    console.log('Valor campos:',this.formaValidacionSimple.value);
    
  }

  guardar1(){
    console.log('Valor forma:',this.forma);
    console.log('Valor campos:',this.forma.value);
    
  }
}
