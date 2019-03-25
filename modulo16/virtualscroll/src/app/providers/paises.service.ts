import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private URL:string="https://restcountries.eu/rest/v2/lang/es"

  constructor(private _http:HttpClient) { }

  consultar(){
   return this._http.get("https://restcountries.eu/rest/v2/lang/es")
   .pipe(map((data) => {
    return data
}));
      
}
}
