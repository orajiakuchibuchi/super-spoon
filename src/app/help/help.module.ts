import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';

import { IndexComponent } from './index/index.component';
import { FaqComponent } from './faq/faq.component';
import { HowComponent } from './how/how.component';
import { TicketComponent } from './ticket/ticket.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    FaqComponent,
    HowComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule
  ]
})
export class HelpModule { }
