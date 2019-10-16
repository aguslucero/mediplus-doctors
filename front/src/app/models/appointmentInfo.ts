export class AppointmentInfo {
 private name: string;
 private lastName: string;
 private day: string;
 private hour: string;
 private photo: string;
 private info: string;



constructor(name: string, lastName: string, day: string) {
  this.name = name;
  this.lastName = lastName;
  this.day = day;
  this.hour = '14:30';
  this.photo = 'FOTO';
  this.info = 'aca va toda la infomacion relacionada con el paciente';
}

}
