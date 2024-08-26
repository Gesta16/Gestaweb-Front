import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';


const routes: Routes =  [
  {
    path:'',
    children:[
      {path:'home', component: MenuComponent},

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class InicioRoutingModule {
  static getRoutes(): Routes{
    return routes;
  }
 }
