import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexYAxis, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';

import { series } from './date';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chartOptions: ChartOptions;

  constructor() {
    const numberOfMonthsToShow = 12;

    this.chartOptions = {
      series: [
        {
          name: "استخدام",
          data: series.monthDataSeries1.prices.slice(0, numberOfMonthsToShow),
          color: '#8A74F9',
        }
        
      ],
      chart: {
        type: "area",
        height: 264 ,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "حجز التذاكر",
        align: "right",
      },
      subtitle: {
        text: "حركة الأسعار",
        align: "right"
      },
      labels: series.monthDataSeries1.dates.slice(0, numberOfMonthsToShow),
      xaxis: {
        type: "category",
        categories: series.monthDataSeries1.dates.slice(0, numberOfMonthsToShow),
        labels: {
          rotate: -45,
          style: {
            fontSize: '16px',
          }
        }
      },
      yaxis: {
        show: false,
      },
      legend: {
        horizontalAlign: "right"
      },
     
    };
  }

  ngOnInit() {
  }
}
