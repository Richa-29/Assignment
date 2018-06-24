import {Component, OnInit} from '@angular/core';

@Component({
    selector:'header-panel',
    templateUrl:'./headerpanel.component.html',
    styleUrls:['./headerpanel.component.css'],
    inputs:['name']
})

export class HeaderPanel implements OnInit{
    user:string;
    ngOnInit(){
       this.user=localStorage.getItem('username');
    }

}