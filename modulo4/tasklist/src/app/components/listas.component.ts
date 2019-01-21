import { Component, OnInit, Input } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent implements OnInit {

@Input () completado:boolean =false


    constructor(public _taskListServicio:TaskListService
        ,public _navCtrl:NavController
        ,private _alertCtrl:AlertController) { }

    ngOnInit() { 

    }
    
    borrarLista(lista:Lista){
        this._taskListServicio.borrarLista(lista)
           
      }
    
      listaSeleccionada(lista:Lista){
        console.log(lista)
        this._navCtrl.push(AgregarPage,{titulo:lista.titulo
                                       , lista:lista} )
        }

        editarLista(lista:Lista,slidingItem:ItemSliding){

            slidingItem.close()

            const alerta = this._alertCtrl.create({
                title:"Editar nombre"
                ,message:"Editar el nombre de la lista"
                ,inputs:[{name:"titulo"
                          ,placeholder:"Nombre de la lista" 
                        ,value:lista.titulo}]
                ,buttons:[{
                  text:"Cancelar"        
                },{text:"Guardar"
                  ,handler:(data)=>{ if (data.titulo.length===0) {
                      return 
                    }
                    lista.titulo=data.titulo
                    this._taskListServicio.guardarStorage()
                  }
                }]
              })
          
              alerta.present()
        }

}