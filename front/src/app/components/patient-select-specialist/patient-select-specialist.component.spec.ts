import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSelectSpecialistComponent } from './patient-select-specialist.component';

describe('PatientSelectSpecialistComponent', () => {
  let component: PatientSelectSpecialistComponent;
  let fixture: ComponentFixture<PatientSelectSpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSelectSpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSelectSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
