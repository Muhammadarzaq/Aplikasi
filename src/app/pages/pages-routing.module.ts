import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../account/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaporanPenjualanComponent } from './laporan-penjualan/laporan-penjualan.component';
import { ProdukComponent } from './produk/produk.component';
import { SidebarkuComponent } from './sidebarku/sidebarku.component';


const routes: Routes = [
  {path: '', redirectTo:'dashboard'},
  {path:'dashboard', component: DashboardComponent},
  {path:'produk', component:ProdukComponent},
  {path:'', component:SidebarkuComponent},
  {path:'register',component:RegisterComponent},
  {path:'laporan',component:LaporanPenjualanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
