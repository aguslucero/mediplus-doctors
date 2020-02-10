import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../services/authService/auth.service';
import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {Router} from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user = {email: '', password: '' };


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
   this.auth.logIn(this.user).subscribe(
    data => {
      console.log('respuesta', data);
      localStorage.setItem('token', data.token);
      if (data) {
        this.router.navigate(['doctor']);
      }
    });

}

getCurrentUser() {

  this.auth.currentUser().subscribe(
    (res) => {
      console.log('respuesta', res);
      return (true);
    },
    (err) =>  console.log(err)
      );
      return false;
}


}
