import { Component, OnInit, Input } from '@angular/core';
import { ImgmdbPipe } from '../../pipes/imgmdb.pipe';

@Component({
	selector: 'app-galeria',
	templateUrl: './galeria.component.html',
	styleUrls: [ './galeria.component.scss' ]
})
export class GaleriaComponent implements OnInit {    
	
	@Input() peliculas: Pelicula[]
	@Input() public titulo: string;

	constructor() {
		 console.log('Peliculas galeria', this.peliculas);
	}

	ngOnInit() {
		let img:ImgmdbPipe = new ImgmdbPipe
    console.log('Peliculas galeria', this.peliculas);
  }
}
