import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HealthCareService} from 'src/app/services/healthCareService/healthCare.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HealthCare } from 'src/app/models/healthCare';
import { HealthCareResponse } from 'src/app/Responses/healthCare.response';
import { ClinicResponse } from 'src/app/Responses/clinic.response';
import { DoctorService } from 'src/app/services/doctorService/doctor.service';
import { Clinic } from 'src/app/models/clinic';

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
  clinics:  Clinic[] = [];
  clinicSelected: Clinic;
  worksOnClinic: Clinic[];
  deleteClinic: Clinic;

  ngOnInit() {
    this.getCurrentUser();
    this.getAllHealthCares();
    this.getAllClinics();
    this.getDoctorClinics();
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
      (res: Clinic[]) => res.forEach(element => {
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

  getDoctorClinics() {
    this.worksOnClinic = [];
    this.doctorService.getDoctorWorkClinics().subscribe((clinic) => {
        clinic.forEach((data) => {
        this.worksOnClinic.push(new Clinic(data.clinic._id, data.clinic.name, data.clinic.adress));
      });
    });
    console.log('clinicas en las que trabaja' + this.worksOnClinic);
  }

  clinicDelete() {
    this.doctorService.clinicDelete(this.deleteClinic._id).subscribe(
      (res) => {
        console.log(res);
        // location.reload();
      },
      (err) => console.log(err)
    );
  }
}

