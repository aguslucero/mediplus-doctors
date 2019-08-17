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

@NgModule({
  declarations: [
    AppComponent,
    PatientPageComponent,
    PatientHomePageComponent,
    HeaderComponent,
    PatientRequestAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('patientView', reducers)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
