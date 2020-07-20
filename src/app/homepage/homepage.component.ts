import { Component, OnInit } from '@angular/core';
import { AuthenticationData } from '../homepage/auth.data';
import { NgForm } from '@angular/forms';
import { Router }  from '@angular/router';
import { CookieService } from 'ngx-cookie-service';  
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  authenticationData : AuthenticationData = {
    username : "",
    password : ""
  };

  authFailed : boolean;
  hasLoggedInUser : boolean;

  constructor(public routerService : Router,private cookieService: CookieService,private appComponent: AppComponent) { }

  ngOnInit(): void {
    let authCookie = this.cookieService.get('authusername');
    if(authCookie)
    {
        this.hasLoggedInUser = true;
    }
  }

  login(authForm : NgForm)
  {
    if(authForm.valid)
    {
        let username = authForm.value.username;
        let password = authForm.value.password;

        if(password  === "12")
        {
            this.authFailed = false;
            this.appComponent.hasLoggedInUser = true;
            this.appComponent.loggedInUser = username;

            this.cookieService.set('authusername', username);  
            
            if(username === "admin")
            {
              this.routerService.navigate(["/appointments"]);
            }
            else
            {
              this.routerService.navigate(["/booking"]);
            }
        }
        else
        {
          this.authFailed = true;
        }
    }
  }

}
