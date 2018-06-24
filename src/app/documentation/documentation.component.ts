import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  user:string;
  fullImagePath="assets/images/hope.png";
  name:string="DOCUMENTATION";
  constructor(private _router:Router) { }

  ngOnInit() {
    this.user=localStorage.getItem("username");
    if(!this.user){
      this._router.navigate(['/signin']);
    }
  }

}
