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

  constructor(private cookieService: CookieService,private routerService:Router){}

  ngOnInit(): void {
  }

  logout()
  {
    let authCookie = this.cookieService.get('authusername');
    this.cookieService.delete('authusername');
    this.hasLoggedInUser = false;
    this.routerService.navigate(["/"]);
  }


}
