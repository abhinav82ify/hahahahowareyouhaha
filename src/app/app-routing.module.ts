import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@/home/home.component';
import { LoginComponent } from '@/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { SurveyComponent } from './survey/survey.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'survey', component: SurveyComponent, canActivate: [AuthGuard] },
  { path: 'results', component: ResultsComponent },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
