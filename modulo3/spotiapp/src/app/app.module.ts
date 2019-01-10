import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SharedComponent } from './components/shared/shared.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    SharedComponent,
    
  ],
  imports: [
    BrowserModule
    ,RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
