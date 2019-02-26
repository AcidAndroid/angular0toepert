import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  constructor(ys: YoutubeService) {
    ys.getvideos().subscribe(data => {
      this.videos = data;
      console.log("videos obtenidos", this.videos);
    });
  }

  ngOnInit() {}
}
