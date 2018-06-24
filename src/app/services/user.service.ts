import {Injectable} from '@angular/core';
import {Users} from '../mock-data/users';

@Injectable()
export class UserService{
    getUsers(){
       return Users;
    }
}