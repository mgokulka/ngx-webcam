import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Chart, Colors } from "chart.js/auto";

@Component({
  selector: "chart",
  template: `
  <div class="row" style="max-height:100vh">
  <div class="col-5 m-1 border">
    <canvas #donutChart></canvas>
  </div>

  <div class="col-5 m-1 border">
    <canvas #columnChart></canvas>
  </div>
</div>

  `,
  styleUrls: [],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild("donutChart") donutChartRef: ElementRef;
  @ViewChild("columnChart") columnChartRef: ElementRef;
  donutChart: any;
  columnChart: Chart;

  constructor() {}

  ngAfterViewInit() {
    this.createDonutChart();
    this.createColumnChart();
  }

  
  createDonutChart() {
    const donutCanvas = this.donutChartRef.nativeElement.getContext("2d");

    this.donutChart = new Chart(donutCanvas, {
      type: "doughnut",
      data: {
        
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            hoverBorderColor: "black",
            rotation: 150,
            hoverBorderWidth: 1,
            hoverOffset: 4,
            data: [50, 60, 70, 180, 190],
          },
        ],
      },
      options: {
        cutout: 95,
        maintainAspectRatio: false,
        tooltip: {
          callbacks: {
            label: (context) => {
              const dataset = context.dataset;
              const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
              const currentValue = dataset.data[context.dataIndex];
              const percentage = ((currentValue / total) * 100).toFixed(2);
              return `${data.labels[context.dataIndex]}: ${currentValue} (${percentage}%)`;
            }
          }
        }
      },
    });
  }
  random_rgb(num: number) {
    var o = Math.round,
      r = Math.random,
      s = 255;
  var rgb="rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
    switch (num) {
      case 1:
        return rgb

        break;
      case 2:
        var index =rgb.replace(")", ",0.2)");
        return index
        break;

      default:
        break;
    }
  }


  
  createColumnChart() {
    const columnCanvas = this.columnChartRef.nativeElement.getContext("2d");
    this.columnChart = new Chart(columnCanvas, {
      type: "bar",
      data: {
        labels: ["A", "B", "C",'D','E','F'],
        datasets: [
          {
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70]
          },
          {
            barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [10, 20, 30, 40, 50, 60, 70]
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        
        
      },
    });
  }
}
