import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PatientPageComponent } from './containers/patient-page/patient-page.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './containers/reducers/';
import { PatientHomePageComponent } from './components/patient-home-page/patient-home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PatientRequestAppointmentsComponent } from './components/patient-request-appointments/patient-request-appointments.component';
import bootstrap from 'bootstrap';
import { PatientSelectSpecialistComponent } from './components/patient-select-specialist/patient-select-specialist.component';

import {HttpClientModule} from '@angular/common/http';
import { DoctorFilteredComponent } from './components/doctor-filtered/doctor-filtered.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientPageComponent,
    PatientHomePageComponent,
    HeaderComponent,
    PatientRequestAppointmentsComponent,
    PatientSelectSpecialistComponent,
    DoctorFilteredComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('patientView', reducers),
    EffectsModule.forRoot([]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
