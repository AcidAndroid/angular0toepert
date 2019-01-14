import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _peticionHttp:HttpClient) { 

    console.log("Spotify service listo");
    
  }


  getQuery(qry:string){
  const url=`https://api.spotify.com/v1/${qry}` 

  const headers =new HttpHeaders({
    Authorization: "Bearer BQAyCIcvxvy8v5dh3sX3W3Kn6QD6NgcL7IWSIp-vFYPLmvnMVqnWSqXePyWhRZb7X7IgORXsNj1s4IJPhJA"
  })

  // console.log(url)
    return this._peticionHttp.get(url,{headers})
  }
  getNewReleases():any{

    // const headers =new HttpHeaders({
    //   Authorization: "Bearer BQAyCIcvxvy8v5dh3sX3W3Kn6QD6NgcL7IWSIp-vFYPLmvnMVqnWSqXePyWhRZb7X7IgORXsNj1s4IJPhJA"
    // })

    // this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    //   .subscribe((datos)=>{
    //     console.log(datos);
    //   })

    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map((data) => {
          return data['albums'].items
      }));
    // return this._peticionHttp.get(`https://api.spotify.com/v1/browse/new-releases`,{headers})
    // .pipe(map((data) => {
    //   return data['albums'].items
    // }));

  }

  getArtists(terminos:string):any{
    

    return this.getQuery(`search?q=${terminos}&type=track%2Cartist&market=US&limit=10&offset=5`)
        .pipe(map((data) => {
      return data['artists'].items
  }));
    // return this._peticionHttp.get(`https://api.spotify.com/v1/browse/search?q=${terminos}&type=track%2Cartist&limit=10&offset=5`,{headers})
    // .pipe(map((data) => {
    //   return data['artists'].items
    // }));
  }
}
