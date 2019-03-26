import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/providers/paises.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  // paises =['Episode I - The Phantom Menace',
  // 'Episode II - Attack of the Clones',
  // 'Episode III - Revenge of the Sith',
  // 'Episode IV - A New Hope',
  // 'Episode V - The Empire Strikes Back',
  // 'Episode VI - Return of the Jedi',
  // 'Episode VII - The Force Awakens',
  // 'Episode VIII - The Last Jedi']

  paises =[]
  paises2: any = [];

  constructor(private _paisesS:PaisesService) { }

  ngOnInit() {

    // this._paisesS.consultar().subscribe((paises)=>{            
      
    //   paises.map((item)=>{
    //     console.log(item);
    //     this.paises.push(item)
    //   })
    //   console.log(paises);
    // })

    this._paisesS.consultar2().subscribe( paises => {          
      this.paises2=paises
      this.paises2.map((item)=>{
            console.log(item);
            this.paises.push(item)
          })

    } );
  }

  drop(event: CdkDragDrop<string[]>){

    console.log('Ok',event);
    moveItemInArray(this.paises2,event.previousIndex, event.currentIndex)

  }

}
