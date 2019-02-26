import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  youtubeURL: string = "https://www.googleapis.com/youtube/v3";
  apiKey: string = "AIzaSyBjROwCgXNVKB38HikHx2WfkaQv17k9HhQ";
  chanelId: string = "UCLXRGxAzeaLDGaOphqapzmg";
	listUploads: string = "UULXRGxAzeaLDGaOphqapzmg";
	nextPageToken:string=""

  constructor(private _peticionHttp: HttpClient) {}

  getvideos() {
		let params = new HttpParams()
		.set("part", "snippet")
		.set("playlistId",this.listUploads)
		.set("key",this.apiKey)
		.set("maxResults",'20')
    

    let specificURL = `${this.youtubeURL}/playlistItems`;
    console.log(specificURL);
    console.log(params.toString());

    return this._peticionHttp.get(` ${specificURL}`, {params}).pipe(
      map(item => {
				this.nextPageToken=item['nextPageToken']
				console.log('nextPageToken',this.nextPageToken);
				
				let videos:any[] = []

				for (const video of item['items']) {
					videos.push(video.snippet)
					// console.log(video);					
				}				
        // console.log('Videos snippets',videos);
        return videos;
      })
    );
  }
}
