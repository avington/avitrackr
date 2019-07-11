import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter, exhaustMap, tap, map, switchMap } from 'rxjs/operators';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../models/profile.model';
import { Observable, of } from 'rxjs';
import { mapSnapshot } from '../utilities/map-snapshot';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  constructor(private authFb: AngularFireAuth, private fireStore: AngularFirestore) {}

  getUser(): Observable<Profile[]> {
    let currentUser: Profile;

    return this.authFb.user.pipe(
      filter(user => !!user),
      tap(user => {
        // grab the user to use later
        currentUser = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber
        };
      }),
      exhaustMap(user => {
        return this.fireStore
          .collection<Profile>('profiles', ref => ref.where('email', '==', user.email))
          .snapshotChanges()
          .pipe(switchMap(mapSnapshot));
      }),
      tap((users: any[]) => {
        // if user is not in db then add them as a profile
        if (users.length === 0) {
          const userCollection = this.fireStore.collection<Profile>('profiles');
          userCollection.add(currentUser);
        }
      })
    );
  }
}
