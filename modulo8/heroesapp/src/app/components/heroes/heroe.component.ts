import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styles: []
})
export class HeroeComponent implements OnInit {
	//Bandera para saber si es nuevo
	nuevo: boolean = false;
	id: string;

	heroe: Heroe = {
		nombre: '',
		casa: 'Marvel',
		bio: 'lorem'
	};
	constructor(
		private _heroeSrvicio: HeroesService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute
	) {
		//Asigna a la varaible los valores del querystring
		_activatedRoute.params.subscribe((parametros) => {
      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        _heroeSrvicio.buscarPorId(this.id).subscribe(data=>{
          console.log('Busqieda por id',data)
          this.heroe=data
        })
      }
		});
	}

	ngOnInit() {}

	agregar() {
		console.log(this.heroe);
		if (this.id == 'nuevo') {
			//insertando
			this._heroeSrvicio.nuevo(this.heroe).subscribe(
				(data) => {
					console.log('Data Agregado', data);

					this._router.navigate([ '/heroe', data.name ]);
				},
				(error) => {
					console.log(error);
				}
			);
		} else {
			//actulizando
			this._heroeSrvicio.editar(this.heroe, this.id).subscribe(
				(data) => {
					console.log('Data actulizado', data);
				},
				(error) => {
					console.log(error);
				}
			);
		}
  }
  

  agregarNuevo(forma:NgForm){
    this._router.navigate([ '/heroe', 'nuevo' ]);
    forma.reset({
      casa:'Marvel'
    })
  }
}
