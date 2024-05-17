import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { IndexComponent } from './index/index.component';
import { PersonalComponent } from './personal/personal.component';
import { ResponseComponent } from './response/response.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IndexComponent,
    PersonalComponent,
    ResponseComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedModule
  ]
})
export class SurveyModule { }
