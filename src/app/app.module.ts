import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { HomeComponent } from '@/home/home.component';
import { RestApiInterceptorService } from './helpers/rest-api-interceptor.service';
import { LoginComponent } from './login/login.component';
import { authReducer } from './store/reducers/auth.reducers';
import { AuthEffects } from './store/effects/auth.effects';
import { HeaderComponent } from './components/header/header.component';
import { SurveyQuestionComponent } from './components/survey-question/survey-question.component';
import { SurveyComponent } from './survey/survey.component';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SurveyQuestionComponent,
    SurveyComponent,
    ProgressBarComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({auth: authReducer}),
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RestApiInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
