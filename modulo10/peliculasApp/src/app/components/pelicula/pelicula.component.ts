import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-pelicula',
	templateUrl: './pelicula.component.html',
	styleUrls: [ './pelicula.component.scss' ]
})
export class PeliculaComponent implements OnInit {
	@Input() datosPelicula: Pelicula;
	@Input() detalle: boolean = false;

	constructor(public _location: Location) {}

	ngOnInit() {}

	regresar() {
		this._location.back();
	}
}
