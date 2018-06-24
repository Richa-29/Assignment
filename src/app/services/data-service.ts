import {data} from '../mock-data/data';
import {Injectable} from '@angular/core';
import {ProductDetails} from '../models/ProductDetails';

@Injectable()
export class DataService{
    products:ProductDetails[];
     getProductDetails():ProductDetails[]{
       return data;
    
}
}