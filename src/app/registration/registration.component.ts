import { Component, OnInit } from '@angular/core';
import { AppointmentData } from '../appointments/appointment.data';
import { NgForm, NgModel } from '@angular/forms';

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

  saveAppointment(appointmentForm : NgForm):void
  { 
      console.log("appointmentNumber >> "+appointmentForm.value.appointmentNumber);
      console.log("customerName >> "+appointmentForm.value.customerName);
      console.log("appointmentDate >> "+appointmentForm.value.appointmentDate);
      console.log("address >> "+appointmentForm.value.address);
      console.log("custMobNo >> "+appointmentForm.value.custMobNo);
      console.log("productNumber >> "+appointmentForm.value.productNumber);

      console.log("Is Form valid "+appointmentForm.valid);
  }

  validateMobileNumber(mobileNumber : NgModel):void
  {
      console.log("Mobile Number "+mobileNumber.value);
  }


}
