import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from '../shared/guards/auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { PaymentComponent } from './payment/payment.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'withdrawal',
    component: WithdrawalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
