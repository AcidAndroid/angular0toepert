import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class YoutubeService {
	youtubeURL: string = 'https://www.googleapis.com/youtube/v3/';
	apiKey: string = 'AIzaSyBjROwCgXNVKB38HikHx2WfkaQv17k9HhQ';
	chanelId: string = 'UCbr0g_ADLsdzhcoAFUZkuug';
	listUploads: string = 'UUbr0g_ADLsdzhcoAFUZkuug';

	constructor(private _peticionHttp: HttpClient) {}

	getvideos() {

    let params= new HttpParams()

    params.set('part','snippet')
    params.set('maxResults','10')
    params.set('id',this.listUploads)

    let specificURL="playlists"

    return this._peticionHttp.get(`${this.youtubeURL} ${specificURL}`,{params})
    .pipe(map((item) => {				
      console.log(item);          
      // return item;
			})
		);
	}
}
