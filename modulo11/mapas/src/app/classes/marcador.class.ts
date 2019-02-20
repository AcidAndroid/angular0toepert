export class Marcador {

    public lat:number
    public lng:number
    public titulo:string="Titulo default"
    public desc:string="Descripcion default"

    constructor( lat:number,lng:number) {
        this.lat=lat
        this.lng=lng
    }
    
}