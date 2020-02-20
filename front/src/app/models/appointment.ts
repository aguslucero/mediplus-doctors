import { Patient } from "./patient";

export class Appointment {

  private _patient: Patient;
  public get patient(): Patient {
    return this._patient;
  }
  public set patient(value: Patient) {
    this._patient = value;
  }
  private _date: string;
  public get date(): string {
    return this._date;
  }
  public set date(value: string) {
    this._date = value;
  }

  private _hour: string;
  public get hour(): string {
    return this._hour;
  }
  public set hour(value: string) {
    this._hour = value;
  }
  private _rejected: boolean;
  public get rejected(): boolean {
    return this._rejected;
  }
  public set rejected(value: boolean) {
    this._rejected = value;
  }
  private _approved: boolean;
  public get approved(): boolean {
    return this._approved;
  }
  public set approved(value: boolean) {
    this._approved = value;
  }


  constructor(patient: Patient, date: string, hour: string, rejected: boolean, approved: boolean) {
    this.patient = patient;
    this.date = date;
    this.hour = hour;
    this.rejected = rejected;
    this.approved = approved;
  }
}
