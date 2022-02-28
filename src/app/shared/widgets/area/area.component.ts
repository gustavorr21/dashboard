import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { of } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import {
  concatMap,
  delay
} from 'rxjs/operators';
import { VendasService } from 'src/app/services/vendas.service';
@Component({
  selector: 'app-wigdget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  constructor(private clienteService: ClienteService,private vendasService: VendasService,) { }

  ngOnInit(){

  this.vendasService.listVendas().pipe(
    concatMap(item => of (item).pipe(delay(100)))
    ).subscribe(dataReturn => {
    var aaaa = this.getValues(dataReturn);
    var vv = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec',];
    var bbbb = this.getValuesMes(dataReturn);

    this.chartOptions = {
      series: aaaa,
      title: {
        text: 'comparativo',
      },
      subtitle: {
        text: 'area',
      },
      chart: {},
      xAxis: [
        {
          categories: vv,
          crosshair: true,
        },
      ],
      tooltip: {
        shared: true,
      },
    };
  })
  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

  getValues(dataReturn:any){
    var retornaDados: { name: any; data: any; }[] = [];
    (dataReturn as any).forEach((element: any) => {
      var x: number = +element.valorTotal;
      retornaDados.push({name:element.nomeProduto, data:[x]});
    });
    return retornaDados;
  }

  getValuesMes(dataReturn:any){
    var retornaDados: number[]=[];
    (dataReturn as any).forEach((element: any,i:any) => {
      var x = new Date(element.dataVenda).getDay() +1;
      retornaDados.push(x);
    });
    return retornaDados;
  }
}
