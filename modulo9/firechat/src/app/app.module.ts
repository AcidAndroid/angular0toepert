import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";


//FireStore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Variables de entorno
import { environment } from '../environments/environment';

//Componentes personales
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

//Providers
import { ChatService } from './providers/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
    ,AngularFireModule.initializeApp(environment.firebase)
    ,AngularFireStorageModule
    ,AngularFireAuthModule
    ,AngularFirestoreModule
    ,FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
