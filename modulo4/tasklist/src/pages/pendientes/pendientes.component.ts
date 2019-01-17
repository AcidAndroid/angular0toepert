import { Component } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { Lista } from '../../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor(public _taskListServicio:TaskListService,public _navCtrl:NavController) {

  }

  listaSeleccionada(lista:Lista){
  console.log(lista)
  }

  agregarLista(){
    console.log("clic en nueva lista");
    this._navCtrl.push(AgregarPage)
  }
}
