import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contrasena'
})
export class ContasenaPipe implements PipeTransform {

    transform(value: string,ocultar:boolean, arg?: any) {
        let resultado :string=value
        if (ocultar){
            // console.log(value.split(""))
            resultado=""
            value.split("").forEach(element => {
                resultado=resultado+"*"
                console.log(resultado)
            });             
        }
        
            return resultado
        
        
    }

}