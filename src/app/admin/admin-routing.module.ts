import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from '../shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
