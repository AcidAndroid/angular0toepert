import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) {}

  ngOnInit() {
  }

  buscar(nombre:string){
    console.log(nombre);    
    this._router.navigate(['/buscar',nombre])
  }
}
