import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'avi-sub-menu-login',
  templateUrl: './sub-menu-login.component.html',
  styleUrls: ['./sub-menu-login.component.scss']
})
export class SubMenuLoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
