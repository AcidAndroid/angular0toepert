import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSeleccionado: any;

  constructor(private ys: YoutubeService) {
    ys.getvideos().subscribe(data => {
      this.videos = data;
      // console.log("videos obtenidos", this.videos);
    });
  }

  ngOnInit() {}

  verVideo(video: any) {
    this.videoSeleccionado = video;
    // console.log(video)
  }

  cerrarVideo(){
    this.videoSeleccionado=null    
  }

  cargarMasvideos(){
    this.ys.getvideos().subscribe(data => {
      let nuevos:any[]=[]
      nuevos=data;

      this.videos.push.apply(this.videos,nuevos)
      // console.log("videos viejos obtenidos", this.videos);
      // console.log("videos nuevos obtenidos", nuevos);
    });
  }
}
