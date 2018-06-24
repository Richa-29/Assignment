import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector:'side-navbar',
    templateUrl:'./sidebar.component.html',
    styleUrls:['./sidebar.component.css']
})

export class SideNavBarComponent implements OnInit{
   
    fullImagePath:string="assets/images/logo.png";
    username:string;

    constructor(private _authenticationService:AuthenticationService,private _router:Router){

    }

    ngOnInit(){
        this.username=localStorage.getItem('username');
    }

    logout(){
        debugger;
           localStorage.removeItem('username');
                localStorage.removeItem('password');
        this._router.navigate(['/signin']);
 }
}