import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {

  user$:Observable<firebase.User>;
  constructor(private aFAuth:AngularFireAuth , private route  : ActivatedRoute) {
    this.user$ = aFAuth.authState;
   }

   Login(){
     let returnUrl =this.route.snapshot.queryParamMap.get("returnUrl") || '/';
     localStorage.setItem('returnUrl',returnUrl);
     this.aFAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }

   LogOut(){
     this.aFAuth.auth.signOut();
   }

}
