import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

@Input ("appResaltado") nuevoColor:string

  constructor(private _element:ElementRef) {
    console.log('Directiva creada')
   
   }

   @HostListener('mouseenter') mouseEntro(){
     console.log(this.nuevoColor);     
  //  this. _element.nativeElement.style.backgroundColor='red'
   this.Resaltar(this.nuevoColor||'blue')
   }

   @HostListener('mouseleave') mouseSalio(){
    // this. _element.nativeElement.style.backgroundColor=null
    this.Resaltar(null)
    }

private Resaltar(color:string){
  console.log(`Color: ${this.nuevoColor}`);
  
  this. _element.nativeElement.style.backgroundColor=color
}
  }
