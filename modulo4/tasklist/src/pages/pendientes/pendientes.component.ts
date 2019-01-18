import { Component } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor(public _taskListServicio:TaskListService
    ,public _navCtrl:NavController
    ,public _alertCtrl:AlertController) {

  }

  listaSeleccionada(lista:Lista){
  console.log(lista)
  this._navCtrl.push(AgregarPage,{titulo:lista.titulo
                                 , lista:lista} )
  }

  agregarLista(){
    // console.log("clic en nueva lista");
    
    const alerta = this._alertCtrl.create({
      title:"Nueva lista"
      ,message:"Nombre"
      ,inputs:[{name:"titulo"
                ,placeholder:"Nombre de la lista" }]
      ,buttons:[{
        text:"Cancelar"        
      },{text:"Agregar"
        ,handler:(data)=>{ if (data.titulo.length===0) {
            return 
          }
          this._navCtrl.push(AgregarPage,{titulo:data.titulo})
          // console.log(data); 
        }
      }]
    })

    alerta.present()
  }
}
