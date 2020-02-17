import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { AuthService } from 'src/app/services/authService/auth.service';
import { HealtCareService} from 'src/app/services/healtCareService/healtCare.service';
import { from } from 'rxjs';
import { HealtCare } from 'src/app/models/healtCare';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  user: Doctor;
  healtCares: HealtCare[];
  constructor(private auth: AuthService,
              private healt: HealtCareService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.auth.currentUser().subscribe(
      data => {
        this.user = new Doctor(data._id, data.person.firstName, data.person.lastName, data.email);
      },
    );
  }
  saveHealtCare() {}

  getAllHealtCares() {
    this.healt.getHealtCares().subscribe((healtCare) => {
      healtCare.forEach((healtC: HealtCare) => {
        this.healtCares.push(new HealtCare(healtC.id, healtC.name));
      });
  });
}
}
