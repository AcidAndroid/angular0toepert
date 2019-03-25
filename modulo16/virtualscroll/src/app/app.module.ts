import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';

//Scrolling especial
import { ScrollingModule  } from "@angular/cdk/scrolling";

//Modulo para drag
import {DragDropModule} from '@angular/cdk/drag-drop'


//Peticiones http
import { HttpClientModule } from "@angular/common/http";

import { PaisesComponent } from './components/paises/paises.component';






@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
