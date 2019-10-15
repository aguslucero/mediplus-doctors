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
import { AppointmentTableComponent } from './components/appointment-table/appointment-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule , MatInputModule } from '@angular/material';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DiaryHeaderComponent } from './components/diary-header/diary-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorFilteredComponent,
    FooterComponent,
    DoctorHomePageComponent,
    DoctorPageComponent,
    DiaryComponent,
    PendingAppointmentComponent,
    AppointmentTableComponent,
    DiaryHeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('DoctorView', reducers),
    EffectsModule.forRoot([]),
    HttpClientModule,
    MatTableModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
