import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../services/authService/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user = {email: '', password: '' };


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
   this.auth.logIn(this.user).subscribe(
    data => {
      console.log('respuesta', data);
      localStorage.setItem('token', data.token);

    });

}

getCurrentUser() {

  this.auth.currentUser().subscribe(
    (res) => {
      console.log('respuesta', res);
    },
    (err) => console.log(err)
  );
  console.log(this.user);
}


}
