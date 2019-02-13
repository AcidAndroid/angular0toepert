import { Component, OnInit,Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { log } from 'util';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {


  @Input()  _resultadoBusqueda:  Pelicula[] = [];

  nombre:string="pelicula"
  constructor(public _peliculaServicio:PeliculasService) { }

  ngOnInit() {
  }


  buscar(nombre:string){
    this.nombre=nombre
    this._resultadoBusqueda=[]
    console.log(nombre)
    this._peliculaServicio.buscarPelicula(nombre).subscribe(((data: any)=>{
      console.log(data);
      this._resultadoBusqueda = data.results      
    }))
  }
}
