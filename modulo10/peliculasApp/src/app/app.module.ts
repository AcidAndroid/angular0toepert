import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';


//Servicios
import { PeliculasService } from './services/peliculas.service';

//Componentes Propios
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculasPopularesComponent } from './components/peliculas-populares/peliculas-populares.component';
import { PeliculasVistasComponent } from './components/peliculas-vistas/peliculas-vistas.component';
import { DatospeliculaComponent } from './components/datospelicula/datospelicula.component';

//Rutas
import {  APP_RUTAS_PELICULAS } from './app.routes';

//Pipes
import { ImgmdbPipe } from './pipes/imgmdb.pipe';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculasComponent,
    PeliculaComponent,
    LoginComponent,    
    PeliculasPopularesComponent,
    PeliculasVistasComponent,
    ImgmdbPipe,
    DatospeliculaComponent,
    BuscadorComponent,
    GaleriaComponent,    

  ],
  imports: [
    BrowserModule
    ,APP_RUTAS_PELICULAS
    ,HttpClientModule
    ,HttpClientJsonpModule
    
  ],
  providers: [PeliculasService,{ provide: LOCALE_ID, useValue: 'es-MX'}],  
  bootstrap: [AppComponent]
})
export class AppModule { }
