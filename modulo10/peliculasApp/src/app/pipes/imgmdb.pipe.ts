import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imgmdb'
})
export class ImgmdbPipe implements PipeTransform {

  transform(value: Pelicula): string {
    let url:string=""
    let env = environment
    
    // console.log(value);    
    if(value.poster_path){
       return `${env.urlmdb}${value.poster_path}`;
    }
    if(value.backdrop_path){
      return `${env.urlmdb}${value.backdrop_path}`
    }
    else{
       return `https://fakeimg.pl/300/?text=${value.title}`
    }
    
  }

}

