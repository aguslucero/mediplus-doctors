import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DoctorsFilteredService {

  getDoctorsFiltered(): any {
    const doctors = [{id: 1, name: 'Juan', surname: 'pardal'}, {id: 1, name: 'Juan', surname: 'pardal'}];
        return doctors;
  }

}
