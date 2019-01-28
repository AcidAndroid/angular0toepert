import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';

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
    // ,pasatiempos:["jugar","dormir","comer","leer","cine"]   
  }

  constructor() { 

    console.log(this.usuario);

    this.forma= new FormGroup(
      {
        'nombreCompleto': new FormGroup(
                                        {
                                        'nombre': new FormControl('',[Validators.required,Validators.minLength(5)])
                                        ,'apellido': new FormControl('',[Validators.required,Validators.minLength(5),this.validacionPeronal])
                                        }
                                      )
        ,'correo': new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
        ,"pasatiempos":new FormArray([new FormControl('Correr',Validators.required)])
        ,"username":new FormControl('',Validators.required,this.validadorAsincrona)
        ,"password1": new FormControl('',[Validators.required])
        ,"password2": new FormControl()
      }
    )
    
    
        //Asignacion de validadores manual
        this.forma.controls['password2'].setValidators([Validators.required,this.validacionPeronal2.bind(this)])


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

    //Carga los valores por default del objeto ; debe tener la misma estructura
    // this.formaValidacionAnidada.setValue(this.usuario)
    
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
    // this.forma.reset() // a un objeto vacion
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

  agregarPasatiempos()
  {
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('',[Validators.required]))
  }

  validadorAsincrona(control:FormControl):Promise<any>|Observable<any>{

    let promesa = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (control.value==="kell") {
          resolve({existe:true})
        }
        else{
          resolve(null)
        }
      },6000)
    })
    return promesa
  }

  validacionPeronal(control:FormControl):{[s:string]:boolean}{


    if ( String(control.value).toUpperCase() ==="HERRERA") {
      return{noherrera:true}
    }

    return null
  }

  validacionPeronal2(control:FormControl):{[s:string]:boolean}{


    if ( control.value !==this.forma.controls['password1'].value) {
      return{noiguales:true}
    }

    return null
  }
}
