import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private _router:ActivatedRoute) {
    _router.parent.params.subscribe((params)=>{
      console.log('RUTA HIJA EDITAR USUARIO');
      
      console.log(params)
    })

   }

  ngOnInit() {
  }

}
