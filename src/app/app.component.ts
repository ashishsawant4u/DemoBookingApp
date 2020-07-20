import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';  
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  
  title = 'DemoBookingApp';
  hasLoggedInUser : boolean;
  loggedInUser : string;

  constructor(private cookieService: CookieService,private routerService:Router){}

  ngOnInit(): void {
    let authCookie = this.cookieService.get('authusername');
    if(authCookie)
    {
      this.hasLoggedInUser = true;
      this.loggedInUser = authCookie;
    }
    else
    {
      this.hasLoggedInUser = false;
      this.loggedInUser = "";
    }
  }

  logout()
  {
    this.cookieService.delete('authusername');
    this.hasLoggedInUser = false;
    this.routerService.navigate(["/"]);
  }


}
