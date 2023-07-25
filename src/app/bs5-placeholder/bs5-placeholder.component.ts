import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Toast} from 'bootstrap'

@Component({
  selector: 'bs5-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bs5-placeholder.component.html',
  styleUrls: ['./bs5-placeholder.component.scss']
})
export class Bs5PlaceholderComponent implements OnInit {
  @ViewChild('myToast', { static: true }) toastEl!: ElementRef<HTMLDivElement>;
  toast: Toast | null = null;
  
  ngOnInit() {
    this.toast = new Toast(this.toastEl.nativeElement, {});
  }
  
  show() {
    this.toast!.show();
  }
}
