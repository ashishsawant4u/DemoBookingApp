import { Component } from '@angular/core';
import { AppointmentData } from './appointment.data';
@Component({
  selector: 'appointment-list',
  templateUrl: './appointments.component.html'
})
export class AppointmentsComponent 
{
    appointmentList : AppointmentData [] = [
        {
          appointmentNumber:"324242344",
          appointmentDate:new Date("12-12-2020"),
          productNumber:"AC3380",
          customerName:"Md Bin Zayd",
          address:"15 Park Avenu,Aukland,NZ,2025",
          custMobNo:"9870123456"
        },
        {
          appointmentNumber:"545345354",
          appointmentDate:new Date("25-12-2020"),
          productNumber:"AC33820",
          customerName:"Md Paul J",
          address:"Midtown Park,Aukland,NZ,2027",
          custMobNo:"9870123456"
        }
    ]
}