import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FileItem } from 'src/app/models/file-item';

export interface Item { nombre: string; url:string }

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) { 

    this.itemsCollection = afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
    
    // console.log(this.items)
    // console.log(this.itemsCollection)


  }

  ngOnInit() {
  }

}
