import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-mapa-editar',
	templateUrl: './mapa-editar.component.html',
	styleUrls: [ './mapa-editar.component.scss' ]
})
export class MapaEditarComponent implements OnInit {
	forma: FormGroup;

	constructor(
		public _formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<MapaEditarComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.forma = _formBuilder.group({
			titulo: data.titulo,
			desc: data.desc
		});
		console.log('Datos de padre pasdos al hijo:', data);
	}

	ngOnInit() {}

	guardarCambios() {

    console.log('Datos del cambio en el modal:',this.forma.value)
    this.dialogRef.close(this.forma.value);

  }
	onNoClick(): void {
		this.dialogRef.close();
	}
}
