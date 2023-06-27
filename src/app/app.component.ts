import {Component, OnInit} from '@angular/core';
import { Observable, Subject } from "rxjs";

@Component({
  selector: "appRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  show: boolean = false;
  public ngOnInit(): void {}
}
