import {Component, OnInit} from '@angular/core';
import { Observable, Subject } from "rxjs";
import { VarServiceService } from './services/var-service.service';

@Component({
  selector: "appRoot",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  show: boolean = false;
  name: string;
  public ngOnInit(): void {}
  constructor(private _var: VarServiceService) {
    this.name = _var.Name;
  }
}
