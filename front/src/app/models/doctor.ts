import { HealthCare } from './healthCare';

export class Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  prepaid: HealthCare[];

  constructor(id: string, firstName: string, lastName: string, email: string, prepaid: HealthCare[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.prepaid = prepaid;
  }
}
