import { Injectable, state } from '@angular/core';
import { AuthService } from './auth.service';
import { Router ,CanActivate ,RouterStateSnapshot} from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private Auth : AuthService ,private router : Router) { }

  canActivate(route,state:RouterStateSnapshot){
   return  this.Auth.user$.map(user => {

      if (user ) return true;

      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
      return false;
    });
  }

}
