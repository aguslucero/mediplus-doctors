export class AppointmentInfo {
 id: string;
  name: string;
  lastName: string;
  day: string;
  hour: string;
  photo: string;
  info: string;



constructor(name: string, lastName: string, day: string, hour: string, id: string) {
  this.id = id;
  this.name = name;
  this.lastName = lastName;
  this.day = day;
  this.hour = hour;
  this.photo = 'FOTO';
  this.info = 'aca va toda la infomacion relacionada con el paciente';
}

}
