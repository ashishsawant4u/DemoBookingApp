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
    appointmentsCount : number;
    errorMsg : String;

    constructor(appointmentsService : AppointmentsService)
    {
        this.appointmentsService = appointmentsService;
    }

    ngOnInit(): void {
        
        let getAllAppointmentsObserver = {
            next:resp =>
            {
                this.appointmentList = <AppointmentData[]>resp;
                console.log('getAllAppointmentsObserver/next ...'+resp);    
            },
            error:resp =>
            {
                this.errorMsg = resp;
                console.log('getAllAppointmentsObserver/error ...'+resp);    
            },
            complete: () =>
            {
                console.log('getAllAppointmentsObserver/complete');  
            }
    }
        
    
    this.appointmentsService.getAllAppointments()
            .subscribe(getAllAppointmentsObserver);


    this.appointmentsService.getAppointmentsCount()
    .subscribe({
        next:resp =>{
            this.appointmentsCount = resp;
        }
    });    

    }

    
}