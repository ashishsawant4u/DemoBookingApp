import { Component, OnInit } from '@angular/core';
import { AppointmentData } from '../appointments/appointment.data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  appointmentForm : AppointmentData = {
    customerName : "",
    appointmentNumber : (Math.floor(Math.random()*90000) + 10000).toString(),
    appointmentDate : new Date(),
    address : "",
    custMobNo : "",
    productNumber : ""
  };


  constructor() { }

  ngOnInit(): void {
  }

}
