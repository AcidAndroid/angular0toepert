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
      Authorization: "Bearer BQCADU7w6y8JCTrhpKJOUtl4I-dx5lEMl7PlPRNX-dnROIw751BMw-QhTB6Pm_VVNgK2iZtdoIxEk41ZwEU"
    })

    // this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})
    //   .subscribe((datos)=>{
    //     console.log(datos);
    //   })

    return this._peticionHttp.get("https://api.spotify.com/v1/browse/new-releases",{headers})

  }
}
