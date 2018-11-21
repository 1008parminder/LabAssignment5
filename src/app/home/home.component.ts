import { Component, OnInit } from '@angular/core';


interface IDecisonProps {
  condX: boolean;
  condY: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conditions: Array<IDecisonProps> = [];
  constructor() { }

  ngOnInit() {
    this.conditions= [
      {
        condX: false,
        condY: false
      },
      {
        condX: false,
        condY: true
      },
      {
        condX: true,
        condY: false
      },
      {
        condX: true,
        condY: true
      },
      
    ]
  }

}