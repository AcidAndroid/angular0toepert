import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(ys:YoutubeService) {

    ys.getvideos().subscribe(data => console.log(data));
    
    console.log();
    

   }

  ngOnInit() {
  }

}
