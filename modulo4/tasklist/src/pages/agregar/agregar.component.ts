import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage implements OnInit {

    constructor(public _taskListServicio:TaskListService) { }

    ngOnInit() { 

    }

   
}