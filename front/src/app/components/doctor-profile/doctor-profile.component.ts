import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HealthCareService} from 'src/app/services/healthCareService/healthCare.service';
import { from } from 'rxjs';
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

  ngOnInit() {
    this.getCurrentUser();
    this.getAllHealthCares();
  }

  getCurrentUser() {
    this.auth.currentUser().subscribe(
      data => {
        this.user = new Doctor(data._id, data.person.firstName, data.person.lastName, data.email, data.prepaid);
      },
    );
  }
  saveHealthCare() {
    const prepaid = this.selectedHealthCare;
    console.log('esta es la obra social pasada: ' + prepaid.name);
    this.doctorService.assingHealthCare(prepaid).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  getAllHealthCares() {
    this.health.getHealthCares().subscribe((healthCare) => {
      healthCare.forEach((healt: HealthCareResponse) => {
        this.healthCares.push(new HealthCare(healt._id, healt.name));
      });
    });
  }
}
