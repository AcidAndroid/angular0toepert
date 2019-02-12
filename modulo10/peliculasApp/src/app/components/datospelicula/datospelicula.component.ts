import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datospelicula',
  templateUrl: './datospelicula.component.html',
  styleUrls: ['./datospelicula.component.scss']
})
export class DatospeliculaComponent implements OnInit {

  pelicula:Pelicula

  constructor(private _servicioPeliculas:PeliculasService
    ,private _params:ActivatedRoute) { 

      let id:number=0
      // _servicioPeliculas.getPeliculaById(id).subscribe(data=>{
      //   console.log(data)
      // })

      _params.params.subscribe(parametros=>{
        id=parametros['id']
        // console.log(parametros);
         _servicioPeliculas.getPeliculaById(id).subscribe((data=>{
          this.pelicula=data    
          console.log(this.pelicula);            
         }))
      })

    }

  ngOnInit() {
  }

}
