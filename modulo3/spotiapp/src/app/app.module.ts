import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

//importar las rutas
import { ROUTES } from './app.routes';

//Peticiones http
import { HttpClientModule } from "@angular/common/http";

//Servicios
import { SpotifyService } from './services/spotify.service';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
