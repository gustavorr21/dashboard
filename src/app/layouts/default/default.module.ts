import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProdutoComponent } from 'src/app/modules/listaProduto/lista-produto/lista-produto.component';
import { ListaVendaComponent } from 'src/app/modules/lista-venda/lista-venda/lista-venda.component';
import { VendasComponent } from 'src/app/modules/lista-venda/vendas/vendas.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogEdicaoProdutoComponent } from 'src/app/modules/listaProduto/dialog-edicao-produto/dialog-edicao-produto.component';

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: undefined,
  max: undefined
};
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ListaProdutoComponent,
    ListaVendaComponent,
    VendasComponent,
    DialogEdicaoProdutoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    ReactiveFormsModule,
    MatIconModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    MatCardModule
   ],
  providers: [
    DashboardService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }

  ],
})
export class DefaultModule { }
