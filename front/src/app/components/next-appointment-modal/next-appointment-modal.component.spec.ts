import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAppointmentModalComponent } from './next-appointment-modal.component';

describe('NextAppointmentModalComponent', () => {
  let component: NextAppointmentModalComponent;
  let fixture: ComponentFixture<NextAppointmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextAppointmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextAppointmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
