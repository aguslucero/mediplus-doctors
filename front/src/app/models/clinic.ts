export class Clinic {
  _id: string;
  name: string;
  addres: string;

  constructor (id: string, name: string, addres: string ) {
    this._id = id;
    this.name = name;
    this.addres = addres;
  }
}
