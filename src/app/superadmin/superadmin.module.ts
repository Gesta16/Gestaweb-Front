import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSuperAdminComponent } from './pages/add-super-admin/add-super-admin.component';
import { SuperadminRoutingModule } from './superadmin-routing.module';



@NgModule({
  declarations: [
    AddSuperAdminComponent,
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MatDialogModule
  ]
})
export class SuperadminModule { }
