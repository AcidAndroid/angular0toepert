import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paises:any[]=[] 
  newReleases:any[]=[]

  constructor(private _peticionHttp:HttpClient , private _spotifyService:SpotifyService) { 
    console.log("Constructor Home");    
    this._peticionHttp.get("https://restcountries.eu/rest/v2/lang/es")
        .subscribe((res:any)=>{
          this.paises=res
        })

        _spotifyService.getNewReleases()
          .subscribe(datos => {
            this.newReleases=datos.albums.items
            console.log(this.newReleases)
          });
        
  }

  ngOnInit() {
    
  }

}
