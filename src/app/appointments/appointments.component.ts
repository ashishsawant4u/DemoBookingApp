import { Component, OnInit } from '@angular/core';
import { AppointmentData } from './appointment.data';
import { AppointmentsService } from './appointments.service';

@Component({
  selector: 'appointment-list',
  templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit
{
    appointmentList : AppointmentData [] ;
    appointmentsService : AppointmentsService;

    constructor(appointmentsService : AppointmentsService)
    {
        this.appointmentsService = appointmentsService;
    }

    ngOnInit(): void {
        
        this.appointmentList = this.appointmentsService.getAllAppointments();
    }
}