import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
    "providedIn":"root"
})
export class AppointmentsAccessGuard implements CanActivate
{
    constructor(private cookieService: CookieService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        let authCookie = this.cookieService.get('authusername');

        if(authCookie === "admin")
        {
            console.log("Appointments List Access GRANTED");
            return true;
        }
        else
        {
            window.alert("Access Blocked! Only Admin can view appointments list"); 
            console.log("Appointments List Access BLOCKED");
            return false;
        }
    }

}