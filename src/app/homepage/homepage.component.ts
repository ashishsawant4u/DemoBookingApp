import { Component, OnInit } from '@angular/core';
import { AuthenticationData } from '../homepage/auth.data';
import { NgForm } from '@angular/forms';
import { Router }  from '@angular/router';

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

  constructor(public routerService : Router) { }

  ngOnInit(): void {
  }

  login(authForm : NgForm)
  {
    if(authForm.valid)
    {
        let username = authForm.value.username;
        let password = authForm.value.password;

        if(password  === "12345678")
        {
            this.authFailed = false;

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
