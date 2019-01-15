import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  @Input() public items: any[];
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  VerArtista(item:any){

    let artistaId:string

    // console.log(item)
    // console.log(item.type)

    if(item.type==='artist'){
      artistaId= item.id
    }
    else{
      artistaId=item.artists[0].id
    }

    this._router.navigate(['/artist/',artistaId])
    // console.log(artistaId)
  }
}
