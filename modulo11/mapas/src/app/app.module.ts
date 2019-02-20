import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Modulos propios
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';

//Componentes propios
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { MapService } from './services/map.service';



@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({apiKey:"AIzaSyD9MC5YRuZpISFdyOFK0BE34c5oFTmrMcY"}),
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
