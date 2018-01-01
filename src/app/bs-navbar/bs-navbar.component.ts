import { Component, OnInit } from '@angular/core';


import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  appUser : AppUser ;

  constructor(private Auth : AuthService) { 
    Auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
  LogOut(){
    this.Auth.LogOut();
  }
}
