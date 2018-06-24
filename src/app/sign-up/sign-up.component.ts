import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  totalUsers:number=5;
  userSignUpForm:FormGroup;
  users=[];
  message:string;
  constructor(private fb:FormBuilder,private _userService:UserService,private _router:Router) {
   
   }

  ngOnInit() {
    this.users=this._userService.getUsers();
     this.userSignUpForm=this.fb.group({
      'username':'',
      'email':'',
      'password':''
    })
  }

  validate(form){

    if(form.username&&form.email&&form.password){
      var index=form.email.indexOf("@");
        for(var i=0;i<this.users.length;i++){
      if(this.users[i].email == form.email){
        this.message="Cannot add duplicate email!!";
          return false;
       }
        else if(index==-1){
          this.message="Not a valid email address."
          return false;
        }
      }
    }
    
       else{
         this.message="Please fill all the fields!!";
          return false;
       } 
        return true;
    
  }

  submitForm(userSignUpForm){
    debugger;
    this.totalUsers=this.totalUsers++;
    debugger;
      if(this.validate(userSignUpForm.value)){
        this.users.push(userSignUpForm.value);
        this.message="Successfully registered!! Please sign in to continue."
       
      }
    }

login(){
  this._router.navigate(['/signin']);
}

}
