import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peliculasApp';
  peliculas:any={}

  constructor(public _peliculasServicio:PeliculasService){

   
    
  }
  
  populares(){
    this._peliculasServicio.getPopulares().subscribe(peliculas=>{
      console.log('peticion http normal',peliculas)
      this.peliculas=peliculas
    },err=>{
      console.log('Error al consultar peliculas',err);       
    })
  
  
    this._peliculasServicio.getPopularesJsonp().subscribe(peliculas=>{
     this.peliculas=peliculas
     console.log('peticion jsonp',peliculas)
   },err=>{
     console.log('Error al consultar peliculas JSONP',err);       
   })
    
  }


  getPelicula(nombre:string){
    this._peliculasServicio.buscarPelicula('Armageddon')
    .subscribe(peliculas => {
      console.log(peliculas);        
    },error=>{
      console.log('Error al buscar una pelicula',error);
      
    })
  }

}

