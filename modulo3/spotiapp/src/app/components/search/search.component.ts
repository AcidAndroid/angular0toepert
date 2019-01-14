import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas:any[]=[]
  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  BuscarArtista(termino:string){
  console.log(termino);
    
  this._spotifyService.getArtists(termino)
  .subscribe(datos => {
    this.artistas=datos
    console.log(this.artistas)
    // console.log(datos)
  });

  }
}
