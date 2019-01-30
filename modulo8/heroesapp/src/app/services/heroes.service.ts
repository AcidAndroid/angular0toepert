import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
				// console.log(item);
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
				// console.log(item);
				return item;
			})
		);
	}


	borrarPorId(key: string) {
		let url = `${this.heroeEditURL}${key}.json`;
		// let body = JSON.stringify(heroe);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
    });
    

    return this._peticionHttp.delete(url,{headers}).pipe(map((item) => {
      console.log(item)
      return item
    }))

	}

	buscarPorId(key: string):Observable<Heroe> {
		let url = `${this.heroeEditURL}${key}.json`;
		// let body = JSON.stringify(heroe);
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
    });
    

    return this._peticionHttp.get<Heroe>(url,{headers}).pipe(map((item) => {
    //   console.log(item)
      return item
    }))

	}


	buscarTodos():Observable<any>  {
				
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
    });
    

    return this._peticionHttp.get(this.heroesURL,{headers}).pipe(map((item) => {
    //   console.log(item)
      return item
    }))

	}

}
