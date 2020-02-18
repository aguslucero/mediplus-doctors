import { TestBed, inject } from '@angular/core/testing';

import { HealthCareService } from './healthCare.service';

describe('AppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthCareService]
    });
  });

  it('should be created', inject([HealthCareService], (service: HealthCareService) => {
    expect(service).toBeTruthy();
  }));
});
