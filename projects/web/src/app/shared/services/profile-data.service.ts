import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter, exhaustMap, tap, map } from 'rxjs/operators';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  constructor(private authFb: AngularFireAuth, private fireStore: AngularFirestore) {}

  getUser() {
    let currentUser: Profile;

    return this.authFb.user.pipe(
      filter(user => !!user),
      tap(user => {
        currentUser = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber
        };
      }),
      exhaustMap(user => {
        return this.fireStore.collection('profiles', ref => ref.where('email', '==', user.email)).valueChanges();
      }),
      tap((users: User[]) => {
        if (users.length === 0) {
          const userCollection = this.fireStore.collection<Profile>('profiles');
          userCollection.add(currentUser);
        }
      })
    );
  }
}
