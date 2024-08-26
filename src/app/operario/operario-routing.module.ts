import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUsuariosComponent } from './pages/formularios/add-usuarios/add-usuarios.component';

const routes: Routes = [
  
  { path: '', 
    children: [
      { path: 'add-usuario', component: AddUsuariosComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OperarioRoutingModule { 
  static getRotes(): Routes{
    return routes;
  }
}
