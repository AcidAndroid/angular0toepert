import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeroesService {
	heroesURL: string = 'https://heroesapp-1b4b2.firebaseio.com/heroes.json';
	heroeEditURL: string = 'https://heroesapp-1b4b2.firebaseio.com/heroes/';

	constructor(private _peticionHttp: HttpClient) {}

	nuevo(heroe: Heroe): any {
		let body = JSON.stringify(heroe);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		return this._peticionHttp.post(this.heroesURL, body, { headers }).pipe(
			map((item) => {
				console.log(item);
				return item;
			})
		);
	}

	editar(heroe: Heroe, key: string) {
		let url = `${this.heroeEditURL}${key}.json`;
		let body = JSON.stringify(heroe);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});

		console.log('url actulizaion', url);

		return this._peticionHttp.put(url, body, { headers }).pipe(
			map((item) => {
				console.log(item);
				return item;
			})
		);
	}

	buscarPorId(key: string) {
		let url = `${this.heroeEditURL}${key}.json`;
		// let body = JSON.stringify(heroe);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
    });
    

    return this._peticionHttp.get(url,{headers}).pipe(map((item) => {
      console.log(item)
      return item
    }))

	}
}
