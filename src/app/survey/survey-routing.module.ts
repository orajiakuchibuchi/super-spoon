import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PersonalComponent } from './personal/personal.component';
import { ResponseComponent } from './response/response.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'response',
    component: ResponseComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
