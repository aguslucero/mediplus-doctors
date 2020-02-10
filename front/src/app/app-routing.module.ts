import { LogInComponent } from './components/log-in/log-in.component';
import { DoctorPageComponent } from './containers/doctor-page/doctor-page.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [


{
  path: '',
  component: LogInComponent
},
{
  path: 'doctor',
  component: DoctorPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
