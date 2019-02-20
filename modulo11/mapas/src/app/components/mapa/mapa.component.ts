import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MapService } from '../../services/map.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.html',
	styleUrls: [ './mapa.component.scss' ]
})
export class MapaComponent implements OnInit {
	title: string = 'My first AGM project';
	lat: number = 51.678418;
	lng: number = 7.809007;
	marcadores: Marcador[] = [];

	constructor(private _mapService: MapService, private snackBar: MatSnackBar, private dialog: MatDialog) {
		//Agrega un marcador por default
		// let  nuevoMarcador = new Marcador(19.48414520959447,-99.1234019825522)
		// this.marcadores.push(nuevoMarcador)

		//Recupera los marcadores guardados en caos de exisitir
		this.marcadores = this._mapService.recuperar();
	}
	ngOnInit() {}

	//Guardar el marcador
	agregarMarcador(evento) {		
		const nuevoMarcador = new Marcador(evento.coords['lat'], evento.coords['lng']);
		console.log('Agregador marcador',evento,nuevoMarcador)
		this.marcadores.push(nuevoMarcador);

		this._mapService.guardar(this.marcadores);
		// Simple message with an action.
		const snackBarRef = this.snackBar.open('Marcador agregado', 'Cerrar');
	}

	editarMarcador(marcador:Marcador) {
		const dialogRef = this.dialog.open(MapaEditarComponent, {
			width: '250px',
			data: { titulo: marcador.titulo, desc:marcador.desc }
		});

		dialogRef.afterClosed().subscribe(datosRecibidos => {
			console.log('The dialog was closed');
			console.log(datosRecibidos);

			if (!datosRecibidos) {
				return
			}
			marcador.desc=datosRecibidos.desc
			marcador.titulo=datosRecibidos.titulo

			this._mapService.guardar(this.marcadores);
			const snackBarRef = this.snackBar.open('Marcador actualizado', 'Cerrar');
		  });

		  
	}
	borrarMarcador(i: number) {
		// console.log('Borrar el mardaor:', i);
		// console.log('Borrar el mardaor:', this.marcadores[i]);
		this.marcadores.splice(i, 1);
		this._mapService.guardar(this.marcadores);
		const snackBarRef = this.snackBar.open('Marcador borrado', 'Cerrar');
	}
}
