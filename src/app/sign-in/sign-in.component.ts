import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  returnUrl:string;
  userLoginForm:FormGroup;
  message:string;
  constructor(private fb:FormBuilder,private _router:Router,private _authenticationService:AuthenticationService
  ,private _route:ActivatedRoute) {
    this.userLoginForm=this.fb.group({
      'username':'',
      'password':''
    })
   }

  ngOnInit() {
   
  }


  SignUp(){
    this._router.navigate(['/signup']);
  }

  validate(form){
    if(form.username&& form.password){
      return true;
    }
    else{
      this.message="Please fill all the fields!!";
      return false;
    }
  }

  submitForm(userLoginForm){
    if(this.validate(userLoginForm.value)){
         if(this._authenticationService.isUserAuthenticated(userLoginForm.value)){
             this._router.navigate(['/home']);
    }
    else{
           this.message="You are not authorized to access this resource!!";
            this._router.navigate(['/signin']);
    }
    }
    
   
  }
}
