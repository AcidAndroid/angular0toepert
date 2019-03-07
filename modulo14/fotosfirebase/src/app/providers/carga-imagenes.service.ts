import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase";
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private  CARPETA_IMAGENES: string = 'img';

  constructor(public db: AngularFirestore) { }

  public imagenesPorCargar(imagenes:FileItem[]){
    console.log(imagenes);    
  }

  private guradarImagen(imagen:{nombre:string,url:string}){
  this.db.collection(`${this.CARPETA_IMAGENES}`).add(imagen)
  }
}
