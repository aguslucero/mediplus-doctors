import { HealthCare } from './healthCare';

export class Doctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: string;
  prepaid: HealthCare[];
  dni: string;
  birthDate: string;
  speciality: string;
  profileUrl: string;

  constructor(id: string, firstName: string, lastName: string, email: string, prepaid: HealthCare[],phone: string,
    adress: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.prepaid = prepaid;
    this.phone = phone;
    this.adress = adress;
  }
}
