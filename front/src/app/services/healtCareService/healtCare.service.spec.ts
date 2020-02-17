import { TestBed, inject } from '@angular/core/testing';

import { HealtCareService } from './healtCare.service';

describe('AppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealtCareService]
    });
  });

  it('should be created', inject([HealtCareService], (service: HealtCareService) => {
    expect(service).toBeTruthy();
  }));
});
