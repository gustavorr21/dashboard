import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { VendasService } from 'src/app/services/vendas.service';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-relatorio-vendas',
  templateUrl: './relatorio-vendas.component.html',
  styleUrls: ['./relatorio-vendas.component.scss']
})
export class RelatorioVendasComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  constructor(private vendasService: VendasService) { }

  ngOnInit(){

    this.vendasService.listVendas().pipe(
      concatMap(item => of (item).pipe(delay(100)))
      ).subscribe(dataReturn => {
      var aaaa = this.getValues(dataReturn);
      var mes = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec'];
      this.chartOptions = {
        series: [{
          name: 'Total de Vendas',
          data: this.totalizaClientes(dataReturn)
       },
       {name: 'Total em Money',
        data: this.getValues(dataReturn)}
        ],
        title: {
          text: 'comparativo',
        },

        subtitle: {
          text: 'area',
        },
        chart: {},
        xAxis: [
          {
            categories: mes,
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
      var clientes = this.getValuesMes(dataReturn);
      var total = [0,0,0,0,0,0,0,0,0,0,0,0];
      for(var i=0; i<clientes.length;i++){
          let valorTotal = clientes[i].totalVenda;
          let mes = new Date(clientes[i].creationDate).getMonth();
          total[mes] = total[mes] + valorTotal
      }
      return total;
    }

    getValuesMes(dataReturn:any){
      var retornaDados: any[]=[];
      (dataReturn as any).forEach((element: any,i:any) => {
        var x ={'creationDate': element.dataVenda, 'totalVenda': element.valorTotal};
        retornaDados.push(x);
      });
      return retornaDados;
    }

    totalizaClientes(dataReturn:any){
      var clientes = this.getValuesMes(dataReturn);
      var total = [0,0,0,0,0,0,0,0,0,0,0,0];
      for(var i=0; i<clientes.length;i++){
          let mes = new Date(clientes[i].creationDate).getMonth();
          total[mes]++;
      }
      return total;
  }
}
