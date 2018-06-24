import { Component, OnInit } from '@angular/core';
import {ProductDetails} from '../models/ProductDetails';
import {DataService} from '../services/data-service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users=0;
  user;
  total=0;
  products;
  noOfOrders:number=0;
  today=Date.now();
  name:string="HOME";
  constructor(private _dataService:DataService,private _userService:UserService) { }

  ngOnInit() {
    this.user=localStorage.getItem('username');
    this.products=this._dataService.getProductDetails();
    this.noOfOrders=this.products.length;
    this.getDailyPuchases();
    this.users=this._userService.getUsers().length;
  }
  
  getDailyPuchases(){
     for(var i=0;i<this.noOfOrders;i++){       
          this.total+=this.products[i].purchase;
    }
  }

}
