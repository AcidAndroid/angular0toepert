import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase";
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES: string = 'img';

  constructor(public db: AngularFirestore) { }

  public imagenesPorCargar(imagenes: FileItem[]) {
    // console.log(imagenes);    
    const storage = firebase.storage().ref()

    for (const imagen of imagenes) {
      let urlDescarga: string = ""
      imagen.uploading = true
      if (imagen.progreso >= 100) {
        continue
      }
      const uploadTask: firebase.storage.UploadTask = storage.child(`${this.CARPETA_IMAGENES}/${imagen.nombreArchiv}`)
        .put(imagen.archivo)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          imagen.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (error) => {
          console.log('Error al subir', error);
        }
        , () => {
          console.log('Imagen cargada correctamente', uploadTask);

          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);            
            imagen.uploading = false
            this.guradarImagen({ nombre: imagen.nombreArchiv, url: downloadURL })
          });
        }
      )
    }

  }

  private guradarImagen(imagen: { nombre: string, url: string }) {
    console.log('Datos para guardar en BD', imagen)
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen)
  }
}
