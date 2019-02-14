import { Injectable, LOCALE_ID } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient,HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class PeliculasService {
	apkey: string = '1b198736108f61af6851c622caf1efb7';
	urlMovie: string = 'https://api.themoviedb.org/3/';

  constructor(private _httpPeticion: HttpClient) {}

	getPopulares() {


    const url = `${this.urlMovie}discover/movie?sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX`;
  

		return this._httpPeticion.get(url).pipe(map((item) => {return item}));
  }
  

  getEstrenos(){
    let fecha = new Date()
    let fechaInicial:string = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}`
    let fecha2 = new Date(fecha.setDate(fecha.getDate()+7))
    let fechaFinal:string=`${fecha2.getFullYear()}-${fecha2.getMonth()+1}-${fecha2.getDate()}`
   

    // console.log(`${fechaInicial} ${fechaFinal}`);
    
    const url = `${this.urlMovie}discover/movie?api_key=${this.apkey}&sort_by=release_date.asc&include_adult=false&primary_release_date.gte=${fechaInicial}&primary_release_date.lte=${fechaFinal}&language=es-MX&callback=JSONP_CALLBACK`;
    // console.log(url);
    
    return this._httpPeticion.jsonp(url,'').pipe(map((item) => { 
      // console.log('Estrenos',item);
     return  item}))

  }
  getPopularesJsonp(){
    const url = `${this.urlMovie}discover/movie?sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX&callback=JSONP_CALLBACK`;

    return this._httpPeticion.jsonp(url,'').pipe(map((item) => {
      // console.log('Populares',item);
      return item}))

  }

  getPopularesKidsJsonp(){
    const url = `${this.urlMovie}discover/movie?certification_country=US&certification.lte=PG&sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX&callback=JSONP_CALLBACK`;

    // console.log(url);
    return this._httpPeticion.jsonp(url,'').pipe(map((item) => {
      // console.log('Populares kids',item);
      return item}))

  }

  getPeliculaById(id:number):Observable<Pelicula>{
    const url = `${this.urlMovie}movie/${id}?sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX&callback=JSONP_CALLBACK`;

    return this._httpPeticion.jsonp<Pelicula>(url,'').pipe(map((item) => {
      // console.log('Pelicula Indovidual',item);
      return item}))

  }
  buscarPelicula(nombre:string){
    const url=`${this.urlMovie}search/movie?query=${nombre}&sort_by=popularity.desc&api_key=${this.apkey}&language=es-MX&callback=JSONP_CALLBACK`;

    return this._httpPeticion.jsonp(url,'').pipe(map((item) => {
      // console.log('Busqueda',item);
      return item}))
  }
}
