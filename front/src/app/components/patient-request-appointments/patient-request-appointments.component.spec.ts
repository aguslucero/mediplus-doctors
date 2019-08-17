import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRequestAppointmentsComponent } from './patient-request-appointments.component';

describe('PatientRequestAppointmentsComponent', () => {
  let component: PatientRequestAppointmentsComponent;
  let fixture: ComponentFixture<PatientRequestAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRequestAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRequestAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
