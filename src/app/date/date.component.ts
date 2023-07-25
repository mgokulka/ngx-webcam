import { Component, OnInit, AfterViewInit, inject } from "@angular/core";
import { interval } from "rxjs";
import { IndexService } from "../services/index.service";
import { FormControl, FormGroup } from "@angular/forms";
interface all_date_obj {
  output: any;
  footer: {
    label: string;
    data_type: string;
  };
}
@Component({
  selector: "date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
export class DateComponent implements OnInit, AfterViewInit {
  _findIndex = inject(IndexService);
  date_main: Date = new Date();
  date_local: any = this.date_main.toLocaleString();
  date_current: any;
  date_today: any;
  constructor() {
    this.dateReduceForm = new FormGroup({
      date_to_reduce: new FormControl([]),
    });
  }
  all_date: all_date_obj[];
  date_chosen: Date;

  dateReduceForm: FormGroup;

  ngOnInit(): void {
    //sync current date and time
    interval(1000).subscribe(() => {
      this.date_current = new Date();
      let objIndex = this.all_date.findIndex(
        (obj) => obj.footer.label == "Sync current date"
      );
      this.all_date[objIndex].output = this.date_current;
    });
    ////////////
    //get todays date="YYYY-MM-dd"
    if (this.date_main.getUTCMonth() < 10) {
      this.date_today =
        this.date_main.getUTCFullYear() +
        "-0" +
        this.date_main.getUTCMonth() +
        "-" +
        this.date_main.getUTCDate();
    }
    if (this.date_main.getUTCDate() < 10) {
      this.date_today =
        this.date_main.getUTCFullYear() +
        "-" +
        this.date_main.getUTCMonth() +
        "-0" +
        this.date_main.getUTCDate();
    }
    if (this.date_main.getUTCMonth() < 10 && this.date_main.getUTCDate() < 10) {
      this.date_today =
        this.date_main.getUTCFullYear() +
        "-0" +
        this.date_main.getUTCMonth() +
        "-0" +
        this.date_main.getUTCDate();
    }
    console.log(this.date_today);
  }
  ngAfterViewInit(): void {
    this.all_date = [
      {
        output: this.date_main,
        footer: { label: "main date", data_type: typeof this.date_main },
      },
      {
        output: this.date_local,
        footer: { label: "local date", data_type: typeof this.date_local },
      },
      {
        output: this.date_current,
        footer: {
          label: "Sync current date",
          data_type: typeof this.date_current,
        },
      },
      {
        output: this.date_chosen,
        footer: {
          label: "User chosen date",
          data_type: typeof this.date_chosen,
        },
      },
      {
        output: this.date_main.getUTCFullYear(),
        footer: { label: "Current Year", data_type: typeof this.date_main },
      },
      {
        output: this.date_main.getUTCMonth(),
        footer: { label: "Current Month", data_type: typeof this.date_main },
      },
      {
        output: this.date_main.getUTCDate(),
        footer: { label: "Current Date", data_type: typeof this.date_main },
      },
      {
        output: this.difference,
        footer: { label: "Date Difference", data_type: typeof this.difference },
      },
    ];
  }
  chosenDate() {
    let objIndex = this.all_date.findIndex(
      (obj) => obj.footer.label == "User chosen date"
    );
    this.all_date[objIndex].output = this.difference.output = this.date_chosen;
  }
  startDate: any;
  endDate: any;
  difference: any;
  btn(val: number) {
    const sd = new Date(this.startDate); //sd=start date
    const ed = new Date(this.endDate); //ed=end date
    switch (val) {
      case 1:
        this.difference = sd.getTime() - ed.getTime();
        let objIndex = this.all_date.findIndex(
          (obj) => obj.footer.label == "Date Difference"
        );
        this.all_date[objIndex].output = this.difference / (1000 * 3600 * 24);
        break;
      case 2:
        const currentDate = new Date(
          this.dateReduceForm.controls["date_to_reduce"].value
        );
        currentDate.setDate(currentDate.getDate() - 30);

        this.dateReduceForm.controls["date_to_reduce"].setValue(
          currentDate.toISOString().substring(0, 10)
        );
        // let abc = this.dateReduceForm.controls["date_to_reduce"].value;
        // console.log(abc);
        // let month: any = abc.split("-");
        // var less: any = (month[1] - 1).toString();
        // let updatedMonth
        // if (month[1] == "01") {
        //   updatedMonth = "12";
        // } else {
        //   updatedMonth ="0"+less
        // }
        // month[1]=updatedMonth
        // console.log(month.join('-'));
        // this.dateReduceForm.patchValue({'date_to_reduce':month.join('-')})

        break;
      default:
        break;
    }
  }
}
