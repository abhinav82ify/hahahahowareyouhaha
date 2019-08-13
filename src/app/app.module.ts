import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
