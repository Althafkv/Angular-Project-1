import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions={
      chart: {
        type: 'area'
    },
    title: {
        text: 'Company Revenue',
        align: 'center'
    },
    subtitle: {
        text: 'Source : Shopster',
        align: 'center'
    },
    xAxis: {
        categories: ['Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020', 'Q1 2022', 'Q2 2022',
            'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023']
    },
    yAxis: {
        title: {
            text: 'TWh'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total Revenue',
        data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
        ]
    }, {
        name: 'Gross Income',
        data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5
        ]
    }, {
        name: 'Losses',
        data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
    }]
    }
  }

}
