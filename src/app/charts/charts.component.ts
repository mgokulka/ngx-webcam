import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columns = ['Browser', 'Percentage'];
  options = {    
  };
  width = 550;
  height = 400;   
  constructor() { }

  ngOnInit(): void {
 
  }

}
