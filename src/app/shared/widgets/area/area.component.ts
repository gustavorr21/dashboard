import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { of } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import {
  concatMap,
  delay
} from 'rxjs/operators';
@Component({
  selector: 'app-wigdget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  constructor(private clienteService: ClienteService,) { }

  ngOnInit(){

  this.clienteService.getListClient().pipe(
    concatMap(item => of (item).pipe(delay(100)))
    ).subscribe(dataReturn => {
    var aaaa = this.getValues(dataReturn);
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
          categories: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec',],
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
      var y: number = +element.email;
      var x: number = +element.senha;
      var z: number = +element.telefone;
      retornaDados.push({name:element.nome, data:[y,x,z]});
    });
    return retornaDados;
  }

}
