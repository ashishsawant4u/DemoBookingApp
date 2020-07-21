import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }  from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentDetailsComponent } from './appointments/appointmentdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentsAccessGuard } from './appointments/appointments.guard';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    RegistrationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"", component:HomepageComponent},
      {path:"home", component:HomepageComponent},
      {path:"appointments", component:AppointmentsComponent,canActivate:[AppointmentsAccessGuard]},
      {path:"booking", component:RegistrationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
