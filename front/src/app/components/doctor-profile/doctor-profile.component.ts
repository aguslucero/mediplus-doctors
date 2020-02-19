import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HealthCareService} from 'src/app/services/healthCareService/healthCare.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HealthCare } from 'src/app/models/healthCare';
import { HealthCareResponse } from 'src/app/Responses/healthCare.response';
import { DoctorService } from 'src/app/services/doctorService/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  user: Doctor;
  selectedHealthCare: HealthCare;
  healthCares: HealthCare[] = [];
  constructor(private auth: AuthService,
              private health: HealthCareService,
              private doctorService: DoctorService) {
  }
  clinics:  Clinics[] ;
  clinicSelected: Clinics;

  ngOnInit() {
    this.getCurrentUser();
    this.getAllHealthCares();
    this.getAllClinics();
  }

  getCurrentUser() {
    this.auth.currentUser().subscribe(
      data => {
        this.user = new Doctor(data._id, data.person.firstName, data.person.lastName, data.email, data.prepaid, data.person.phone, data.adress);
        this.user.dni = data.person.dni;
        this.user.birthDate = data.person.birthDate;
        this.user.speciality = data.speciality;
        this.user.profileUrl = data.profileURL;
      },
    );
  }
  saveHealthCare() {
    const prepaid = this.selectedHealthCare;
    console.log('esta es la obra social pasada: ' + prepaid.name);
    this.doctorService.assingHealthCare(prepaid).subscribe(
      (res) => {
        console.log(res);
        location.reload();
      },
      (err) => console.log(err)
    );
  }
  deleteHealthCare() {
    console.log('Se eliminara la siguiente obra social: ' + this.deleteHealthCare);

  }

  getAllHealthCares() {
    this.health.getHealthCares().subscribe((healthCare) => {
      healthCare.forEach((healt: HealthCareResponse) => {
        this.healthCares.push(new HealthCare(healt._id, healt.name));
      });
    });
  }

  updateDoctorData() {
    console.log(this.user);
    this.doctorService.updateDoctor(this.user).subscribe(
      (res) => {
        console.log(res);
        location.reload();
      },
      (err) => console.log(err)
    );
  }
  getAllClinics() {
    this.clinics = [];
    this.doctorService.getAllClinics().subscribe(
      (res: Clinics[]) => res.forEach(element => {
        this.clinics.push(element) ;

      })
      );
  }

  clinicAdd() {
    console.log(this.clinicSelected);
    this.doctorService.clinicAdd(this.clinicSelected._id).subscribe(
    (res) => console .log(res)
    );
  }
}

export class Clinics {
_id: string;
name: string;
addres: string;
}
