import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private _router:ActivatedRoute) {
    _router.params.subscribe((params)=>{
      console.log('RUTA PADRE');
      
      console.log(params)
    })

   }

  ngOnInit() {
  }

}
