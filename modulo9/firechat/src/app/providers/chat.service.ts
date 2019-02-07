import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	private itemsCollection: AngularFirestoreCollection<Mensaje>;
	items: Observable<Mensaje[]>;

	chats: Mensaje[] = [];
	usuario: any = {};

	constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
		this.afAuth.authState.subscribe((user) => {
			console.log('Estatus usuario login:', user);

			if (!user) {
				return;
			}
			this.usuario.nombre = user.displayName;
			this.usuario.uid = user.uid;
		});
	}

	login(tipo: string) {
		switch (tipo) {
			case 'google':
				this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

				break;
			case 'twiter':
				this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
				break;
			default:
				break;
		}
	}
	logout() {
		this.afAuth.auth.signOut();
		this.usuario = {};
	}

	getMensajes() {
		this.itemsCollection = this.afs.collection<Mensaje>('chats', (ref) => ref.orderBy('fecha', 'desc').limit(5));
		this.items = this.itemsCollection.valueChanges();
		return this.items.pipe(
			map((mensajes: Mensaje[]) => {
				console.log('Mensajes recibidos', mensajes);
				// this.chats=mensajes
				this.chats = [];
				for (let chat of mensajes) {
					this.chats.unshift(chat);
				}
			})
		);
	}

	agregarMensaje(texto: string) {
		let mensaje: Mensaje = {
			mensaje: texto,
			nombre: this.usuario.nombre,
      fecha: new Date().getTime(),
      uid:this.usuario.uid
		};

		return this.itemsCollection.add(mensaje);
	}
}
