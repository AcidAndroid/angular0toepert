import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'util';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[] ): string {
    if (!value){
      console.log(value);
      
      return "assets/img/noimage.png";
    }
    if(value.length>0){
      return value[0].url
    }
    return "assets/img/noimage.png";
  }

}
