import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  //Se usa exports en caso de modulo de xportacion para que sean publicos los que se exporta y usarlo en otros modulos
exports:[ 
  MatToolbarModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  ReactiveFormsModule,
]
})
export class MaterialModule { }
