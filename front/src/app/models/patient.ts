
export class Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dni: number;

  constructor(id: string, firstName: string, lastName: string, email: string, phone: string, dni: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.dni = dni;
  }
}
