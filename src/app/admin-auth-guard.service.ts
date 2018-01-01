import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private Auth : AuthService ,private userService :UserService ) { }

  canActivate():Observable<boolean>{
   return  this.Auth.appUser$
               .map(appuser =>  appuser.isAdmin);
  }
}
