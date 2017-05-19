import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    @Output() dateArray= [];
    milisecondsDay = Date.now();
    currentDate;

    
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
  
    constructor() { }
  
    ngOnInit() {
        for (let i = 0; i < 10; i++) { 
            this.dateArray.push(this.milisecondsDay);                     
            this.milisecondsDay += 86400000;
        }
        console.log(this.dateArray);
    }

}
