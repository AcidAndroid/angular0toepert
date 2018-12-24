import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[]
  nombre:string
  resultados:number

  constructor(private _activatedRoute:ActivatedRoute
              ,private _heroService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params =>{
      console.log('init buscador');  
      this.nombre=params['nombre']    
      console.log(this.nombre)
      this.heroes=this._heroService.getHerobyName(this.nombre)
      console.log(this.heroes)
    })
  }

}
