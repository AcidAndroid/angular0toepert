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
    this.itemsCollection = this.afs.collection<Mensaje>('chats',ref=>ref.orderBy('fecha','desc').limit(5));
    this.items = this.itemsCollection.valueChanges();    
    return this.items.pipe(map((mensajes:Mensaje[]) => {      
      console.log('Mensajes recibidos',mensajes)
      // this.chats=mensajes
      this.chats=[]
      for (let chat of mensajes) {
        this.chats.unshift(chat)
      }
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
