import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'projects/web/src/app/shared/services/profile-data.service';

@Component({
  selector: 'avi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private userData: ProfileDataService, public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.userData.getUser().subscribe(s => console.log('sub', s));
  }
}
