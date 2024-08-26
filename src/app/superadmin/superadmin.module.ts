import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSuperAdminComponent } from './pages/add-super-admin/add-super-admin.component';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { DefaultComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../theme/shared/shared.module';
import { BajajChartComponent } from './pages/dashboard/bajaj-chart/bajaj-chart.component';
import { BarChartComponent } from './pages/dashboard/bar-chart/bar-chart.component';
import { ChartDataMonthComponent } from './pages/dashboard/chart-data-month/chart-data-month.component';



@NgModule({
  declarations: [
    AddSuperAdminComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MatDialogModule,
    SharedModule,
    BajajChartComponent,
    BarChartComponent,
    ChartDataMonthComponent
  ]
})
export class SuperadminModule { }
