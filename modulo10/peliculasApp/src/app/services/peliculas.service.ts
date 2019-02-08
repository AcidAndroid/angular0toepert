import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient,HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PeliculasService {
	apkey: string = '1b198736108f61af6851c622caf1efb7';
	urlMovie: string = 'https://api.themoviedb.org/3/';

  constructor(private _httpPeticion: HttpClient) {}

	getPopulares() {


    const url = `${this.urlMovie}discover/movie?sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX`;
    //const url="https://api.themoviedb.org/3/movie/550?api_key=1b198736108f61af6851c622caf1efb7"

		return this._httpPeticion.get(url).pipe(map((item) => {return item}));
  }
  
  getPopularesJsonp(){
    const url = `${this.urlMovie}discover/movie?sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX&callback=JSONP_CALLBACK`;

    return this._httpPeticion.jsonp(url,'').pipe(map((item) => {return item}))

  }

  buscarPelicula(nombre:string){
    const url=`${this.urlMovie}search/movie?query=${nombre}&sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX&callback=JSONP_CALLBACK`;

    return this._httpPeticion.jsonp(url,'').pipe(map((item) => {return item}))
  }
}
