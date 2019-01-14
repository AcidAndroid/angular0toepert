import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _peticionHttp:HttpClient) { 

    console.log("Spotify service listo");
    
  }

  getNewReleases():any{

    const headers =new HttpHeaders({
      Authorization: "Bearer BQDf10K4U9OC4THyWewHLlOPTvjfLRfvVxkMfZqxY9EXh4SXjbfm200KnjCv1PGYc48V9_0yc0lzVBhnzz4"
    })

    // this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    //   .subscribe((datos)=>{
    //     console.log(datos);
    //   })

    return this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})

  }

  getArtists(terminos:string):any{
    const headers =new HttpHeaders({
      Authorization: "Bearer BQDf10K4U9OC4THyWewHLlOPTvjfLRfvVxkMfZqxY9EXh4SXjbfm200KnjCv1PGYc48V9_0yc0lzVBhnzz4"
    })

    return this._peticionHttp.get(`https://api.spotify.com/v1/search?q=${terminos}&type=track%2Cartist&limit=10&offset=5`,{headers})
  }
}
