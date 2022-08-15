import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: Observable<firebase.User | null>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('You are Successfully signed up!', res);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('You are in!');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  SignOut() {
    this.angularFireAuth.signOut();
    this.router.navigate(['/login']);
  }
}
