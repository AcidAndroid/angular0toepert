import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../../services/heroes.service";
import {Router}  from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(nombre:string){
  console.log(nombre)  
  this._router.navigate(['/buscar',nombre])
  // console.log(this._heroService.getHerobyName(nombre)) 
  }



}
