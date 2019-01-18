import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { NavParams } from 'ionic-angular';
import { Lista,ListItem } from "../../models";
// import { Lista } from '../../models/lista.model';
// import { ListItem } from '../../models/lista-item.model';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage implements OnInit {

    lista:Lista
    nombreItem:string=''

    constructor(public _taskListServicio:TaskListService
        ,private _navParams:NavParams) {        
            // console.log(this._navParams.get("titulo"))    
            const titulo = this._navParams.get("titulo")

            if(_navParams.get('lista')){
                this.lista=_navParams .get('lista')
            }
            else{
                this.lista = new Lista(titulo)
                _taskListServicio.agregarLista(this.lista)
            }

         }

    ngOnInit() { 

    }

    //Con el uso de nombreItem y ngModel ya no hace falta usar el #nombreCampo en la forma html
    agregarItem(){
        if (this.nombreItem.length===0) {            
            return
        }
        const item = new ListItem(this.nombreItem)
        console.log(`Item capturado: ${this.nombreItem}`)
        this.lista.items.push(item)
        this._taskListServicio.guardarStorage()
        this.nombreItem=""
    }

    actualizarItem(item:ListItem){
        item.completado=!item.completado
        this._taskListServicio.guardarStorage()
    }

    borrarItem(id:number){
        console.log(id)
        this.lista.items.splice(id,1)
        this._taskListServicio.guardarStorage()
    }
}