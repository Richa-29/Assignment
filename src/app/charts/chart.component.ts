import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service';

@Component({
  selector: 'line-chart-demo',
  templateUrl: './chart.component.html',
  styleUrls:['./chart.component.css']
})
export class LineChartDemoComponent implements OnInit {
 
  dailyEarnings=[];
  products;
  constructor(private _dataService:DataService){

  }
  
  ngOnInit(){
        this.products= this._dataService.getProductDetails();
        this.getdailyEarnings();       
  }
    getdailyEarnings(){
        for(var i in this.products){
            this.dailyEarnings.push(this.products[i].earnings)
        }
        console.log(this.dailyEarnings);
    }
      
    type = 'line';
      data = {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: [
          {
            label: "EARNINGS vs TIME",
            data: this.dailyEarnings
          }
        ]
      };
options = {
  responsive: true,
  maintainAspectRatio: false
};

}