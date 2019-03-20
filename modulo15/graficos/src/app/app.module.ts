import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Graficos
import { ChartsModule } from 'ng2-charts';
import { LineasComponent } from './components/lineas/lineas.component';


@NgModule({
  declarations: [
    AppComponent,
    LineasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
