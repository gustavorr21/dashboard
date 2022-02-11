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

  pieChart(x:any){
    var aa = this.dadosCorreto(x)

    return  [{
      name: 'Brands',
      colorByPoint: true,
      data: aa
    }]
  }

  dadosCorreto(dataReturn:any){
    var retornaDados: { name: any; y: any; }[] = [];
    (dataReturn as any).forEach((element: any) => {
      var y: number = +element.email;
      var x: number = +element.senha;
      var z: number = +element.telefone;
      retornaDados.push({name:element.nome, y:y});
    });
    return retornaDados;
  }
}
