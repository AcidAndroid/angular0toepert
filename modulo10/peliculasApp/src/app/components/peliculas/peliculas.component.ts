import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculasPopulares: Pelicula[] = [];
  peliculasEstrenos: Pelicula[] = [];

  constructor(private _servicioPeliculas: PeliculasService) {
    console.log('Componente Peliculas');

    _servicioPeliculas.getEstrenos().subscribe(
			(data) => {
        this.peliculasEstrenos=data.results
				// console.log('Estrenos',this.peliculasEstrenos);
			},
			(error) => {
				console.log('Error en conexion con api moviedb:',error);
			}
		);

		_servicioPeliculas.getPopularesJsonp().subscribe(
			(data) => {
        this.peliculasPopulares=data.results
				// console.log('Pupulares',this.peliculasPopulares);
			},
			(error) => {
				console.log('Error en conexion con api moviedb:',error);
			}
		);
  }

  ngOnInit() {
  }

}
