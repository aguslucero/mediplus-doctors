export class WorkableDay{
  name: String;
  private  number: Number;
  private startHour: Number;
  private finishHour: Number;
  private breakStart: Number;
  private breakFinish: Number;
  private  maxAppointments: Number;




  constructor(name: String, number: Number, startHour: Number,  finishHour: Number, breakStart: Number, breakFinish: Number, maxAppointments: Number
) {
  this.name = name;
  this.number = number;
  this.startHour = startHour;
  this.finishHour = finishHour;
  this.breakStart = breakStart;
  this.breakFinish = breakFinish;
  this.maxAppointments = maxAppointments;

  }

  }
