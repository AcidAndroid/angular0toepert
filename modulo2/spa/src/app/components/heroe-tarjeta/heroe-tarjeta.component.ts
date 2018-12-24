import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';
import { Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input () heroe:Heroe
  @Input () idHeroe:number
  @Output() heroeSeleccionado:EventEmitter<number>


  constructor(private _router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // this.router.navigate(['/heroe',index])
    // console.log(this.idHeroe);
     this._router.navigate(['/heroe',this.idHeroe])
    // this.heroeSeleccionado.emit(this.idHeroe)
    
  }
 
}
