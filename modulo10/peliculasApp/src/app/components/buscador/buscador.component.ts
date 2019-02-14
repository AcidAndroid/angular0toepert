import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, RouterState } from '@angular/router';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
	styleUrls: [ './buscador.component.scss' ]
})
export class BuscadorComponent implements OnInit {
	@Input() _resultadoBusqueda: Pelicula[] = [];

	nombre: string = 'pelicula';
  constructor(public _peliculaServicio: PeliculasService
    ,private _ar: ActivatedRoute
    ) 
    
    {
    // console.log(_ar)
		_ar.params.subscribe((parametros) => {
      // console.log(parametros);
      
      if (parametros['nombre']) {
        this.nombre=parametros['nombre']
        this.buscar(this.nombre)
      }
    });
    

   

    _ar.data.subscribe(data=>{
      console.log('url',data)
    })
	}

	ngOnInit() {}

	buscar(nombre: string) {
		this.nombre = nombre;
		this._resultadoBusqueda = [];
		console.log(nombre);
		this._peliculaServicio.buscarPelicula(nombre).subscribe((data: any) => {
			console.log(data);
			this._resultadoBusqueda = data.results;
		});
	}
}
