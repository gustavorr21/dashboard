import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

   bigChart() {
    return [{
      name:'Asia',
      data: [502,635,809,947,420,3634,5268]
    },
    {
      name:'Africa',
      data: [106,108,350,647,720,780,1350]
    },
    {
      name:'Europa',
      data: [160,200,340,440,1500,2400,3208]
    },
    {
      name:'America',
      data: [18,31,89,100,250,818,1201]
    },
    {
      name:'Oceania',
      data: [2,4,6,9,13,30,33]
    }];
  }

  cards(){
    return [71,78,39,66];
  }

  pieChart(){
    return  [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
    }]
  }
}
