import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imgmdb'
})
export class ImgmdbPipe implements PipeTransform {

  transform(value: Pelicula,poster:boolean=false): string {
    let url:string=""
    let env = environment
    
    if (poster && value.poster_path){
      return `${env.urlmdb}${value.poster_path}`;
    }
    if (poster && value.backdrop_path){
      return `${env.urlmdb}${value.backdrop_path}`
    }
    if (poster && value.backdrop_path && value.poster_path)
    {
      return `https://fakeimg.pl/500/?text=${value.title}`
    }

    // console.log(value);    
    if(value.backdrop_path){
      return `${env.urlmdb}${value.backdrop_path}`
    }
    if(value.poster_path){
       return `${env.urlmdb}${value.poster_path}`;
    }
    else{
       return `https://fakeimg.pl/300/?text=${value.title}`
    }
    
  }

}

