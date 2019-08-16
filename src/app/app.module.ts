import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";

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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsEffects } from './store/effects/questions.effects';
import { questionsReducer } from './store/reducers/questions.reducers';

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
    MatCardModule,
    MatProgressBarModule,
    EffectsModule.forRoot([AuthEffects, QuestionsEffects]),
    StoreModule.forRoot({auth: authReducer, questions: questionsReducer}),
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RestApiInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
