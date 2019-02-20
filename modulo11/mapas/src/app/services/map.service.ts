import { Injectable } from '@angular/core';
import { Marcador } from '../classes/marcador.class';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  guardar(coords:Marcador[]){
  
    // console.log(JSON.stringify(coords))
    localStorage.setItem('coords',JSON.stringify(coords))

  }

  recuperar():Marcador[]{
    

    let marcadoresRecuperados:Marcador[]=[]

    if(localStorage.getItem('coords')){
      marcadoresRecuperados= JSON.parse(localStorage.getItem('coords'))
    }

    // console.log('Marcadores recuperados',marcadoresRecuperados)
    return marcadoresRecuperados


  }
}
