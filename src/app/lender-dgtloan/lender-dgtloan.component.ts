import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'lender-dgtloan',
  templateUrl: './lender-dgtloan.component.html',
  styleUrls: ['./lender-dgtloan.component.scss']
})
export class LenderDGTLOANComponent implements OnInit {
  @ViewChild('close') close!: ElementRef;
  @ViewChild('modalOpen') modalOpen!: ElementRef;
  constructor() { }
  stations = ['Station A', 'Station B', 'Station C', 'Station D', 'Station E'];
  currentStation = 2   ; // Example: Station C is the current station
  ngOnInit(): void {
  }

}
