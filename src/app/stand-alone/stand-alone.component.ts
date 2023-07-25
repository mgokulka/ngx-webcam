import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "stand-alone",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stand-alone.component.html",
  styleUrls: ["./stand-alone.component.scss"],
})
export class StandAloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  switchContainer(key: number) {
    switch (key) {
      case 1:
        break;

      default:
        break;
    }
  }
}
