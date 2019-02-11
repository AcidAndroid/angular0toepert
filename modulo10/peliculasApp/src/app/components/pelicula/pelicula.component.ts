import { Component, OnInit,Input } from '@angular/core';


@Component({
	selector: 'app-pelicula',
	templateUrl: './pelicula.component.html',
	styleUrls: [ './pelicula.component.scss' ]
})
export class PeliculaComponent implements OnInit {

	@Input () datosPelicula:Pelicula
	
	constructor() {
		
	}

	ngOnInit() {}
}
