import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer  } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  
  constructor(private _domsanitizer:DomSanitizer){

  }

  transform(value: any, url:string, args?: any): any {
    return this._domsanitizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
