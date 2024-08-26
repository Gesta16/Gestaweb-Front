import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddSuperAdminComponent } from './pages/add-super-admin/add-super-admin.component';
import { DefaultComponent } from './pages/dashboard/dashboard.component';
import { ListSuperadminComponent } from './pages/list-superadmin/list-superadmin.component';
import { ListAdminComponent } from './pages/list-admin/list-admin.component';

const routes:Routes = [
  {
    path: '',
    children: [
      {path: 'add-superAdmin', component:AddSuperAdminComponent},
      {path: 'list-superadmin', component: ListSuperadminComponent},
      {path: 'list-admin', component: ListAdminComponent},
      {path: 'dashboard', component:DefaultComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SuperadminRoutingModule {
  static getRoutes(): Routes{
    return routes;
  }
 }
