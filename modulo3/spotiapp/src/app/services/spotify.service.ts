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

  getNewReleases():any{

    const headers =new HttpHeaders({
      Authorization: "Bearer BQAyCIcvxvy8v5dh3sX3W3Kn6QD6NgcL7IWSIp-vFYPLmvnMVqnWSqXePyWhRZb7X7IgORXsNj1s4IJPhJA"
    })

    // this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    //   .subscribe((datos)=>{
    //     console.log(datos);
    //   })

    return this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    .pipe(map((data) => {
      return data['albums'].items
    }));

  }

  getArtists(terminos:string):any{
    const headers =new HttpHeaders({
      Authorization: "Bearer BQAyCIcvxvy8v5dh3sX3W3Kn6QD6NgcL7IWSIp-vFYPLmvnMVqnWSqXePyWhRZb7X7IgORXsNj1s4IJPhJA"
    })

    return this._peticionHttp.get(`https://api.spotify.com/v1/search?q=${terminos}&type=track%2Cartist&limit=10&offset=5`,{headers})
    .pipe(map((data) => {
      return data['artists'].items
    }));
  }
}
