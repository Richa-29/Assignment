import {Injectable} from '@angular/core';
import {Users} from '../mock-data/users';
import {Observable} from 'rxjs';

@Injectable()
    export class AuthenticationService{
        isAuthenticated:boolean;
        isExist:boolean=false;
        users=Users;
        constructor(){ }

       isUserAuthenticated(usercredentials):boolean{
           let user = this.users.find(i => i.username === usercredentials.username);
            if(user){
                if(user.password===usercredentials.password)
                this.isExist=true;
            }
            if(this.isExist){            
               localStorage.setItem('username',usercredentials.username);
               localStorage.setItem('password',usercredentials.password);
               this.isAuthenticated=true;
             }

           else{
              this.isAuthenticated=false;
           }
            
            return this.isAuthenticated;
           
        }
    
}