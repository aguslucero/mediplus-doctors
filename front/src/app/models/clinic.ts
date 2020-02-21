export class Clinic {
  _id: string;
  name: string;
  adress: string;

  constructor (id: string, name: string, adress: string ) {
    this._id = id;
    this.name = name;
    this.adress = adress;
  }
}
