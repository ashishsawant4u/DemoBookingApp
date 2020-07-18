import { Injectable } from '@angular/core';
import { AppointmentData } from './appointment.data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn:"root"
})
export class AppointmentsService
{
    httpService : HttpClient;

    constructor(httpService : HttpClient)
    {
        this.httpService = httpService;
    }

    appointmentsServiceExceptionHandler(response : HttpErrorResponse) 
    {
        let errorMsg;

        if(response.status === 0)
        {
            errorMsg = "Web Service Not Accessible";
        }

        console.log("Error >> "+response.message);
            
        return throwError(errorMsg);
    }

    getAllAppointments(): Observable<AppointmentData[]>
    {
        return this.httpService.get<AppointmentData[]>("https://run.mocky.io/v3/b620c714-9776-43e1-9728-c42afb9b656eX")
            .pipe(
                catchError(this.appointmentsServiceExceptionHandler)
            );
    }

    
}