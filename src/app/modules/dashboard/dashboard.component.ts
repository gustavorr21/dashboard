import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ClienteService } from 'src/app/services/cliente.service';
import { concatMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

export interface UserData {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone'];
  dataSource: MatTableDataSource<UserData> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  cards = [] as any;
  pieChart = [] as any;
  chartOptions: any;
  constructor(private dashboardService: DashboardService,
              private clienteService: ClienteService) {

   }

  ngOnInit() {
  this.clienteService.getListClient().pipe(
    concatMap(item => of (item).pipe(delay(1000)))
    ).subscribe(dataReturn => {
    // var aaaa = this.getValues(dataReturn);
    this.dataSource = new MatTableDataSource(dataReturn as []);
    this.dataSource.paginator = this.paginator;
    this.pieChart = this.dashboardService.pieChart(dataReturn);
    this.chartOptions = {};
  })

}
  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
