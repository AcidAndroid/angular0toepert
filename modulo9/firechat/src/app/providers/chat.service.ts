import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  items: Observable<Mensaje[]>;

  chats:Mensaje[]=[]
  constructor(private afs: AngularFirestore) { 

    
  }


  getMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    this.items = this.itemsCollection.valueChanges();    
    return this.items.pipe(map((mensajes:Mensaje[]) => {      
      console.log(mensajes)
      this.chats=mensajes
    }))
  }

  agregarMensaje(texto:string){
    let mensaje:Mensaje ={
      mensaje:texto
      ,nombre:'Demo'
      ,fecha:new Date().getTime()
    }
    
    return this.itemsCollection.add(mensaje)
  }
}
