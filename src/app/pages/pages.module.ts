import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdukComponent } from './produk/produk.component';
import { SidebarkuComponent } from './sidebarku/sidebarku.component';
import { RegisterComponent } from './register/register.component';
import { SampingComponent } from './samping/samping.component';
import { LaporanPenjualanComponent } from './laporan-penjualan/laporan-penjualan.component';
import { CetakLaporanPenjualanComponent } from './cetak-laporan-penjualan/cetak-laporan-penjualan.component';
import { ChartsModule } from "ng2-charts";
import { KasirComponent } from './kasir/kasir.component';
import { TransaksiComponent } from './transaksi/transaksi.component';


// Chart data
export interface ChartType {
  labels?: any;
  datasets?: any;
  options?: any;
}

@NgModule({
  declarations: [
    DashboardComponent, 
    ProdukComponent,
    SidebarkuComponent,
    RegisterComponent,
    SampingComponent,
    LaporanPenjualanComponent, 
    CetakLaporanPenjualanComponent, KasirComponent, TransaksiComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ChartsModule
  ]
})
export class PagesModule { }
