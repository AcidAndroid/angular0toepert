import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
	selector: 'app-peliculas',
	templateUrl: './peliculas.component.html',
	styleUrls: [ './peliculas.component.scss' ]
})
export class PeliculasComponent implements OnInit {
	peliculasPopulares: Pelicula[] = [];
	peliculasEstrenos: Pelicula[] = [];
	peliculasNinos: Pelicula[] = [];

	constructor(private _servicioPeliculas: PeliculasService) {
		console.log('Componente Peliculas');

		_servicioPeliculas.getEstrenos().subscribe(
			(data: any) => {
				this.peliculasEstrenos = data.results;
				// console.log('Estrenos', this.peliculasEstrenos);
			},
			(error) => {
				console.log('Error en conexion con api moviedb:', error);
			}
		);

		_servicioPeliculas.getPopularesJsonp().subscribe(
			(data: any) => {
				this.peliculasPopulares = data.results;
				// console.log('Pupulares', this.peliculasPopulares);
			},
			(error) => {
				console.log('Error en conexion con api moviedb:', error);
			}
		);

		_servicioPeliculas.getPopularesKidsJsonp().subscribe(
			(data: any) => {
				this.peliculasNinos = data.results;
				// console.log('Pupulares kids',this.peliculasNinos);
			},
			(error) => {
				console.log('Error en conexion con api moviedb:', error);
			}
		);
	}

	ngOnInit() {}
}
