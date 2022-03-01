import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEdicaoProdutoComponent } from '../dialog-edicao-produto/dialog-edicao-produto.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'quantidade', 'valorProduto','actions'];
  dataSource: MatTableDataSource<any> | any;
  dialogRef: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  private unsub$ = new Subject();
  constructor(private produtoService:ProdutoService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.produtoService.listProduto().pipe().subscribe(dataReturn => {
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


  openInclusaoParametro(produto: any) {
    this.dialogRef = this.dialog
      .open(DialogEdicaoProdutoComponent, {
        width: '600px',
        data: {
          parametro: null,
          title: 'Editar Produto',
          produto: produto
        }
      });

    this.dialogRef
      .afterClosed()
      .pipe(
        takeUntil(this.unsub$)
      )
      .subscribe(() => {

      });
  }


}
