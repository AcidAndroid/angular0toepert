import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/providers/paises.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  paises =['Episode I - The Phantom Menace',
  'Episode II - Attack of the Clones',
  'Episode III - Revenge of the Sith',
  'Episode IV - A New Hope',
  'Episode V - The Empire Strikes Back',
  'Episode VI - Return of the Jedi',
  'Episode VII - The Force Awakens',
  'Episode VIII - The Last Jedi']

  constructor(private _paisesS:PaisesService) { }

  ngOnInit() {

    // this._paisesS.consultar().subscribe((paises)=>{      
    //   this.paises= paises
    //   console.log(this.paises);
    // })
    
  }

  drop(event: CdkDragDrop<string[]>){

    console.log('Ok');
    

  }

}
