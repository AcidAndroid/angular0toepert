import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo.... etiqueta html
    </p>
   <button class="btn btn-primary" btn-lg btn-block (click)="tamano=tamano+5">
   <i class="fa fa-plus" aria-hidden="true"></i>
   </button>
  <button class="btn btn-primary" btn-lg btn-block (click)="tamano=tamano-5">
  <i class="fa fa-minus" aria-hidden="true"></i>
  </button>
  
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number=50
  constructor() { }

  ngOnInit() {
  }

}

