import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log('Estoy en el guard AuthGuardService');
    console.log('Contenido de ActivatedRouteSnapshot');
    console.log(route);
    console.log('Contenido de RouterStateSnapshot');
    console.log(state);
    console.log(`Esta autenticado? ${this._authService.isAuthenticated()}`)
    if (this._authService.isAuthenticated()) {
      console.log('Paso el guard');      
      return true;  
    }
    else{
      console.error('Bloquedo por el guard');
      
      return false
    }
  }

}



