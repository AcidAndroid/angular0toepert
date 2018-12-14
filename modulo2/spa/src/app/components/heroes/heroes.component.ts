import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from "../../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];

  constructor(private _heroesservice:HeroesService) { 
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.heroes=this._heroesservice.getHeroes()
    console.log(this.heroes)
  }

 
}
