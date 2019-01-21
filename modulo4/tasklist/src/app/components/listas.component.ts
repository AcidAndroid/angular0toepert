import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/tasklist.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent implements OnInit {

    constructor(public _taskListServicio:TaskListService) { }

    ngOnInit() { 

    }
    
}