import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string,todas:boolean=true, ...args: any[]): string {
        value= value.toLowerCase()
        console.log(value);
        let nombres = value.split(" ")   
        
        if (todas) {
            for (let index in nombres) {            
                nombres[index] = nombres[index][0].toUpperCase()+nombres[index].substring(1);
                
            }    
            
        }
        else{
            nombres[0] = nombres[0][0].toUpperCase()+nombres[0].substring(1);
        }
                        
        console.log(args);
        return nombres.join(" ")
    }
}