import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable()
export class TaskListService {
    
    listas:Lista[]=[]
    constructor() {

        // const lista1:Lista = new Lista('Lista pueba 1')
        // const lista2:Lista = new Lista('Lista pueba 2')

        // this.listas.push(lista1,lista2)
        console.log('Tasklist serivicio iniciliazado');
        // console.log(this.listas);
        this.cargarStorage()
                
    }
    agregarLista(lista:Lista){
        this.listas.push(lista)
        this.guardarStorage()
    }

    borrarLista(lista:Lista){
        this.listas = this.listas.filter(item => {
            return item.id !== lista.id
        });
        this.guardarStorage()
    }
    guardarStorage(){
        localStorage.setItem("data",JSON.stringify(this.listas) )
    }

    cargarStorage(){

        if (localStorage.getItem("data")){
            this.listas= JSON.parse(localStorage.getItem("data")) 
        }
    }

}