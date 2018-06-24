import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs/';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authenticationService: AuthenticationService,private _router:Router) { }

    canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
     if (localStorage.getItem('username')&&localStorage.getItem('password')) {
            // logged in so return true
            return true;
        }
          
        this._router.navigate(['signin']);
        return false;
      

       
 }
}