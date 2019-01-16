import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artista:any={}
  loadingArtist:boolean
  topTracks:any=[]

  constructor(private _router:ActivatedRoute,private _spotifyService:SpotifyService) { 

    this.loadingArtist=true
    this._router.params.subscribe((params)=>{
      console.log(params)
      this.getArtista(params.id)
      this.getTopTrack(params.id)
    })

  }

  ngOnInit() {
  }
  
  getArtista(id:string){
    this.loadingArtist=true
    this._spotifyService.getArtist(id)
      .subscribe((artist) => {
        this.artista=artist
        console.log(artist)
        this.loadingArtist=false
      });
  }

getTopTrack(id:string){
  this.loadingArtist=true
  this._spotifyService.getTopTrackArtist(id)
        .subscribe((tracks) => {
          this.topTracks = tracks
          console.log(tracks)
        });
  
}


}
