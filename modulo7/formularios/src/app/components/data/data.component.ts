import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup
  forma1:FormGroup
  constructor() { 

    this.forma= new FormGroup({
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
    
  }

  guardar1(){
    console.log('Valor forma:',this.forma);
    console.log('Valor campos:',this.forma.value);
    
  }
}
