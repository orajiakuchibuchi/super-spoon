import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SockResolver } from './shared/resolvers/socket/sock.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule),
    resolve:{
      fromSock: SockResolver
    }
  },
  {
    path: 'support',
    loadChildren: ()=> import('./support/support.module').then(m => m.SupportModule),
    resolve:{
      fromSock: SockResolver
    }
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
    resolve:{
      fromSock: SockResolver
    }
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule),
    resolve:{
      fromSock: SockResolver
    }
  },
  {
    path: 'help',
    loadChildren: ()=> import('./help/help.module').then(m => m.HelpModule),
    resolve:{
      fromSock: SockResolver
    }
  },
  {
    path: 'survey',
    loadChildren: ()=> import('./survey/survey.module').then(m => m.SurveyModule),
    resolve:{
      fromSock: SockResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
