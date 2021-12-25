import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../account/register/register.component';
import { CetakLaporanPenjualanComponent } from './cetak-laporan-penjualan/cetak-laporan-penjualan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KasirComponent } from './kasir/kasir.component';
import { LaporanPenjualanComponent } from './laporan-penjualan/laporan-penjualan.component';
import { ProdukComponent } from './produk/produk.component';
import { SidebarkuComponent } from './sidebarku/sidebarku.component';
import { TransaksiComponent } from './transaksi/transaksi.component';


const routes: Routes = [
  {path: '', redirectTo:'dashboard'},
  {path:'dashboard', component: DashboardComponent},
  {path:'produk', component:ProdukComponent},
  {path:'', component:SidebarkuComponent},
  {path:'register',component:RegisterComponent},
  {path:'laporan',component:LaporanPenjualanComponent},
  {path:'cetak-laporan',component:CetakLaporanPenjualanComponent},
  {path:'kasir',component:KasirComponent},
  {path:'transaksi',component:TransaksiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
