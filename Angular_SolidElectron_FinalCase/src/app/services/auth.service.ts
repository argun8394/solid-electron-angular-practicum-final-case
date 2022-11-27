import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { SignupData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new BehaviorSubject<boolean>(false);

  constructor( private auth: Auth) { }

//firebase endpoint signUp method returns to signup component.ts
  createUserWithEmail(newUser: SignupData): Observable<UserCredential> {
    const userCreationPromise = createUserWithEmailAndPassword(this.auth,newUser.email, newUser.password)
    return from(userCreationPromise);
  }

  login({ email, password }:SignupData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }


}
