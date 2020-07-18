import { Injectable } from '@angular/core';
import { AppointmentData } from './appointment.data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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

    getAllAppointments(): Observable<AppointmentData[]>
    {
        return this.httpService.get<AppointmentData[]>("https://run.mocky.io/v3/a13cc79e-b6f1-4491-9be9-3d3449199060");
    }
}