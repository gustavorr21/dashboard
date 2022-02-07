import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label:string | undefined;
  @Input() total:string | undefined;
  @Input() percentage:string | undefined;

  Highcharts = Highcharts;
  chartOptions={};

  @Input() data=[];

  constructor() { }

  ngOnInit(){

    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor:null,
          borderwidth:0,
          margin:[2,2,2,2],
          height:60,
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outiside: true
      },
      legend:{
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        lables:{
          enabled: false,
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },

      yAxis: {
        lables:{
          enabled: false,
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      series: [{
        data:this.data
      }]
    }

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    }

}
