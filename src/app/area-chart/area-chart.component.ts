import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions={
      title: {
        text: 'Visit and Sales Statistics',
        align: 'center'
    },
    xAxis: {
        categories: ['Jan-Mar', 'Mar-Jun', 'Jun-Aug', 'Aug-Oct', 'Oct-Dec']
    },
    yAxis: {
        title: {
            text: 'Profits'
        }
    },
    tooltip: {
        valueSuffix: ' Profit'
    },
    plotOptions: {
        series: {
            borderRadius: '25%'
        }
    },
    credits:{
        enabled:false
    },
    series: [{
        type: 'column',
        name: '2021',
        data: [59, 83, 65, 228, 184]
    }, {
        type: 'column',
        name: '2022',
        data: [24, 79, 72, 240, 167]
    }, {
        type: 'column',
        name: '2023',
        data: [58, 88, 75, 250, 176]
    }, {
        type: 'spline',
        name: 'Average',
        data: [47, 83.33, 70.66, 239.33, 175.66],
        marker: {
            lineWidth: 2,
            fillColor: 'white'
        }
    },]
    }
    // to export chart
    HC_exporting(Highcharts);
  }
}
