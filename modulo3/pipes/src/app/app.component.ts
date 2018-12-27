import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  nombre:string="Hola"
  arreglo=[1,2,3,4,5,6,7,8,9,10]
}
