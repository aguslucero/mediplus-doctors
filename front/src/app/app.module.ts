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
import {MatFormFieldModule , MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DiaryHeaderComponent } from './components/diary-header/diary-header.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from './services/appointment.service';
import { NextAppointmentModalComponent } from './components/next-appointment-modal/next-appointment-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MatIconModule, MatToolbarModule, MatBottomSheetModule, MatListModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotificationsMenuComponent } from './components/notifications-menu/notifications-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
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
    DiaryHeaderComponent,
    SchedulePageComponent,
    NextAppointmentModalComponent,
    SnackbarComponent,
    NotificationsMenuComponent,
    LogInComponent,
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
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatDialogModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    AppRoutingModule

  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent],
  entryComponents: [NextAppointmentModalComponent, SnackbarComponent, NotificationsMenuComponent ]
})
export class AppModule { }
