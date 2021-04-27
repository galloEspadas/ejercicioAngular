import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilGuard implements CanActivate, CanActivateChild {
  constructor( private router: Router){
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    /**console.log('Ruta padre');
    console.log('route: ' +route);
    console.log('state: ' + state);*/
    
    return true;
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    /**console.log('ruta rija');
    console.log('childRoute: ' + childRoute);
    console.log('state child route:' + state);**/
    
    return true;
  }


  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.validarUrl(state.url).toPromise().then(res => {
        if (res) {
          return true;
        } 
        //else {
          //this.router.navigate(['/403'])
          //return false;
        //}
      })
  }*/
}
