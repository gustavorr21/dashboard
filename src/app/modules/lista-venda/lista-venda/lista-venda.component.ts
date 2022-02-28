import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendasService } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html',
  styleUrls: ['./lista-venda.component.scss']
})
export class ListaVendaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomeProduto', 'valorTotal', 'quantidade'];
  dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.vendasService.listVendas().pipe().subscribe(dataReturn => {
    this.dataSource = new MatTableDataSource(dataReturn as []);
    this.dataSource.paginator = this.paginator;
  })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
