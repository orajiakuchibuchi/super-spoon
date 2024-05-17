import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HowComponent } from './how/how.component';
import { FaqComponent } from './faq/faq.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'how',
    component: HowComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
