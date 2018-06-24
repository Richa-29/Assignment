import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service';
import {ProductDetails} from '../models/ProductDetails';
import {FormsModule} from '@angular/forms';
import {FormBuilder,FormGroup,FormControl}  from '@angular/forms';
import {Router} from '@angular/router';
import { CategoryPipe } from '../pipes/searchpipe';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
   newPurchase={id:'',user:'',purchase:"",commission:'',earnings:'',status:'',date:''};
   orderForm:FormGroup;
   products;
   user:string;
   message:string;
   name:string="DATA";
   function:string;
  constructor(private _dataservice:DataService,private _fb:FormBuilder,private _router:Router) { }

  ngOnInit() {
    this.user=localStorage.getItem('username');
    this.function="ADD NEW";
    if(this.user){
      this.products=this._dataservice.getProductDetails();
    }
    else{
      this._router.navigate(['/signin']);
    }
    
    this.orderForm=this._fb.group({
      'user':'',
      'purchase':'',
      'commission':'',
      'earnings':'',
      'status':'',
      'date':''
    })
    
  }

  validate(orderForm){
    
    if(orderForm.user&&orderForm.purchase&&orderForm.commission&&orderForm.earnings&&orderForm.status&&orderForm.date){
     return true;
    }
    else
      {
        return false;
      }
  }
deletemessage(){
  this.message="";
   this.function="ADD NEW";
}
  AddOrder(orderForm){
    this.function="ADD NEW";
   this.message="Successfully submitted!!";
    if(this.validate(this.newPurchase))
      {
           if(this.newPurchase.id!=''){
              for(var i=0;i<this.products.length;i++){
                if(this.products[i].id==this.newPurchase.id){
                  this.products[i]=this.newPurchase;
                  break;
                }
              }
              this.newPurchase={id:'',user:'',purchase:"",commission:'',earnings:'',status:'',date:''};
            }     
          else
            {
            var length= this.products.length;
            orderForm.value.id=this.products[length-1].id+1;
            this.products.push(orderForm.value);
            this.newPurchase={id:'',user:'',purchase:"",commission:'',earnings:'',status:'',date:''};
            }   
      }
  else{
    this.message="Please fill all the fields!!";
  }
      
   
  }

  cancel(){
    debugger;
    this.products=this._dataservice.getProductDetails();
    this.newPurchase={id:'',user:'',purchase:"",commission:'',earnings:'',status:'',date:''};
  }

 edit(product){
   this.message="";
   this.function="EDIT";
   this.newPurchase.id=product.id;
   this.newPurchase.user=product.user;
   this.newPurchase.purchase=product.purchase;
   this.newPurchase.commission=product.commission;
   this.newPurchase.earnings=product.earnings;
   this.newPurchase.status=product.status;
   this.newPurchase.date=product.date;
 }
  delete(product){
    var index=this.products.indexOf(product);
    this.products.splice(index,1);
    
  }

 
   isDesc: boolean = false;
   column: string = 'User';
  sort(property){
    var  direction: number;
     this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    direction = this.isDesc ? 1 : -1;

    this.products.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};


}
