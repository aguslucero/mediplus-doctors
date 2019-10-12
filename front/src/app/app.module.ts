import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './containers/reducers/';
import { HeaderComponent } from './components/header/header.component';
import bootstrap from 'bootstrap';
import { DoctorPageComponent } from './containers/doctor-page/doctor-page.component';
import {HttpClientModule} from '@angular/common/http';
import { DoctorFilteredComponent } from './components/doctor-filtered/doctor-filtered.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorHomePageComponent } from './components/doctor-home-page/doctor-home-page.component';
import { DiaryComponent } from './components/diary/diary.component';
import { PendingAppointmentComponent } from './components/pending-appointment/pending-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorFilteredComponent,
    FooterComponent,
    DoctorHomePageComponent,
    DoctorPageComponent,
    DiaryComponent,
    PendingAppointmentComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('DoctorView', reducers),
    EffectsModule.forRoot([]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
