import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {


  heroes:any[]=[]
  loading:boolean=true

  constructor(private _servicioHeore:HeroesService,private _router:Router) { 


    _servicioHeore.buscarTodos().subscribe(data=>{
     
      //Esta manera de manejarlo no es la adecuada
      // for (const key in data) {
      //   let h =data[key]
      //   h.key$=key
      //   this.heroes.push(data[key])
      // }
      this.heroes=data
      console.log('Heroes obtenidos:',this.heroes);
      setTimeout(() => {      
        this.loading=false
      }, 3000);
      
    })

  }

borrar(id:string){
		this._servicioHeore.borrarPorId(id).subscribe(data=>{
      console.log('Respuesta borrado',data)
      if (data) {
        console.error(data)
      }
      else{
        delete this.heroes[id]
      }
    })
	}

  ngOnInit() {
  }

}
