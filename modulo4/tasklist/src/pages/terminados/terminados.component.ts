import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage implements OnInit {

    constructor(public _taskListServicio:TaskListService) { }

    ngOnInit() { 

    }

    listaSeleccionada(lista:Lista){
        console.log(lista)
        }
}